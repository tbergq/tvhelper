import { Model } from 'mongoose';
import { log } from 'crosscutting';

import UserModel, { IUser } from './entities/user-entity';

export type MaybeUser = IUser | null | undefined;

export interface IUserRepository {
  getByUserName: (username: string) => Promise<MaybeUser>;
  getByUserNames: (usernames: Array<string>) => Promise<Array<MaybeUser> | null>;
  saveUser: (user: IUser) => Promise<boolean>;
}

export default class UserRepository implements IUserRepository {
  #model: Model<IUser>;

  constructor(model: Model<IUser> = UserModel) {
    this.#model = model;
  }

  async saveUser(user: IUser): Promise<boolean> {
    try {
      const status = await this.#model.updateOne({ username: user.username }, user);
      return status.ok > 0;
    } catch (e) {
      log('Failed to update user', user, e);
      return false;
    }
  }

  async getByUserNames(usernames: Array<string>): Promise<Array<MaybeUser> | null> {
    try {
      const users = await this.#model.find({ username: { $in: usernames } });
      return users.map((user) => user?.toObject());
    } catch (e) {
      log('failed to fetch users', usernames, e);
      return null;
    }
  }

  async getByUserName(username: string): Promise<MaybeUser> {
    try {
      const query = await this.#model.findOne({ username });
      return query?.toObject();
    } catch (e) {
      log(`failed to fetch user: ${username}`, e);
      return null;
    }
  }
}
