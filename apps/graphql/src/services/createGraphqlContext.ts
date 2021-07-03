import type { Request } from 'express';
import { UserService, IUserService } from 'account';
import { FavoriteService, IFavoriteService } from 'favorite';
import { WatchedEpisodeService, IWatchedEpisodeService } from 'episode';
import { log } from 'crosscutting';
import { TvshowService, ITvshowService } from 'tvshow';

import getTvhelperLoaders, { TvHelperDataLoaders } from '../tvhelper/getDataloaders';

type LoggedInUser = any;

export type GraphqlContextType = {
  readonly user: LoggedInUser | null | undefined;
  readonly userService: IUserService;
  readonly favoriteService: IFavoriteService;
  readonly watchedEpisodeService: IWatchedEpisodeService;
  readonly tvshowService: ITvshowService;
  readonly log: typeof log;
  readonly dataLoader: {
    readonly tvhelper: TvHelperDataLoaders;
  };
};

export default function createContext(request: Request): GraphqlContextType {
  return {
    user: request.user,
    log,
    userService: new UserService(),
    favoriteService: new FavoriteService(),
    // @ts-ignore: request.user does exist
    watchedEpisodeService: new WatchedEpisodeService(request.user?.id ?? ''),
    tvshowService: new TvshowService(),
    dataLoader: {
      tvhelper: getTvhelperLoaders(),
    },
  };
}
