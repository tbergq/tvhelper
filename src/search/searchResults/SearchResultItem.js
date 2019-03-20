// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { ListItem } from '@tbergq/tvhelper-components';
import Router from 'next/router';

import type { SearchResultItem_tvShow as TvShow } from './__generated__/SearchResultItem_tvShow.graphql';

type Props = {|
  +tvShow: ?TvShow,
|};

const SearchResultItem = (props: Props) => {
  function onClick() {
    Router.push({
      pathname: '/tvShow',
      query: { id: props.tvShow?.id },
    });
  }
  const description = props.tvShow?.rating ?? '';
  const listItemProps = {
    description: description.toString(),
    title: props.tvShow?.name ?? '',
    onClick,
    icon: null,
  };
  return <ListItem {...listItemProps} />;
};

export default createFragmentContainer(SearchResultItem, {
  tvShow: graphql`
    fragment SearchResultItem_tvShow on TvShow {
      name
      rating
      id
    }
  `,
});
