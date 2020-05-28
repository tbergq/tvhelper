// @flow strict

import mongoose, { type MongooseConnection } from 'mongoose';

const connection: MongooseConnection = mongoose.createConnection();

mongoose.set('debug', false);

export default connection;
