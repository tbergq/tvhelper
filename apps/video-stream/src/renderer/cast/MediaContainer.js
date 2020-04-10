// @flow strict-local

import * as React from 'react';
import { Stack } from '@kiwicom/orbit-components';

import CastController from './castController/CastController';
import FileSelectors from './FileSelectors';

export default function MediaContainer(): React.Element<typeof Stack> {
  return (
    <Stack>
      <FileSelectors />
      <CastController />
    </Stack>
  );
}
