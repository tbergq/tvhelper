// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import {
  Card,
  CardSection,
  CardSectionContent,
  CardSectionHeader,
} from '@tbergq/tvhelper-components';

import type { Week_week as WeekType } from './__generated__/Week_week.graphql';

type Props = {|
  +week: ?WeekType,
|};

export const Week = (props: Props) => {
  const name = props.week?.name ?? '';
  return (
    <Card>
      <CardSection expandable={true} initialExpanded={false}>
        <CardSectionHeader>{name}</CardSectionHeader>
        <CardSectionContent>
          <div>todo</div>
        </CardSectionContent>
      </CardSection>
    </Card>
  );
};

export default createFragmentContainer(Week, {
  week: graphql`
    fragment Week_week on Week {
      name
    }
  `,
});
