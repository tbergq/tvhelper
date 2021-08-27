import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import ViewerType from './models/Viewer';

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  types: [ViewerType],
});
