// @flow
import { getUsers, getUsersThreadCount } from '../models/user';
import createLoader from './create-loader';
import type { Loader } from './types';

export const __createUserLoader = () =>
  createLoader(users => getUsers(users), 'id');

export const __createUserThreadCountLoader = () =>
  createLoader(users => getUsersThreadCount(users), 'id');

export default () => {
  throw new Error(
    '⚠️ Do not import loaders directly, get them from the GraphQL context instead! ⚠️'
  );
};