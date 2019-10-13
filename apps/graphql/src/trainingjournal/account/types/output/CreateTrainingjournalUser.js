// @flow strict

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

export default new GraphQLObjectType({
  name: 'CreateTrainingJournalUser',
  fields: {
    id: GlobalID(({ id }) => id),
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  },
});
