// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/tvhelper-relay';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import FavoritesTable from './FavoritesTable';

const renderQuery = (props: FavoriteQueryResponse) => (
  <FavoritesTable favorites={props.favorites} />
);

export default function FavoriteQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query FavoriteQuery {
          favorites {
            ...FavoritesTable_favorites
          }
        }
      `}
      variables={{}}
      render={renderQuery}
    />
  );
}
