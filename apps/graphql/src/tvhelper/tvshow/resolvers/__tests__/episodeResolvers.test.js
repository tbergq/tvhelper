// @flow

import Mockdate from 'mockdate';

import { resolvePreviousEpisode, resolveNextEpisode } from '../episodeResolvers';

Mockdate.set('2019-01-19');
const dataloader = {
  tvhelper: {
    episodes: {
      load: jest.fn(() =>
        Promise.resolve([
          { airdate: '2019-01-01' },
          { airdate: '2019-01-10' },
          { airdate: '2019-01-20' },
        ]),
      ),
    },
  },
};

const getISOShortFormat = (date: Date) => {
  return date.toISOString().substring(0, 10);
};

describe('resolvePreviousEpisode', () => {
  it('returns next episode', async () => {
    // $FlowExpectedError: Just passing what is needed to test resolver
    const previousEpisode = await resolvePreviousEpisode(dataloader, 1);
    expect(getISOShortFormat(previousEpisode)).toEqual('2019-01-10');
  });

  it('returns null when there is no previous episode', async () => {
    dataloader.tvhelper.episodes.load.mockReturnValueOnce([
      { airdate: '2019-02-01' },
      { airdate: '2019-02-10' },
      { airdate: '2019-02-20' },
    ]);
    // $FlowExpectedError: Just passing what is needed to test resolver
    const previousEpisode = await resolvePreviousEpisode(dataloader, 1);
    expect(previousEpisode).toBeNull();
  });
});

describe('resolveNextEpisode', () => {
  it('returns next episode', async () => {
    // $FlowExpectedError: Just passing what is needed to test resolver
    const nextEpisode = await resolveNextEpisode(dataloader, 1);
    expect(getISOShortFormat(nextEpisode)).toEqual('2019-01-20');
  });

  it('returns null when there is no next episode', async () => {
    dataloader.tvhelper.episodes.load.mockReturnValueOnce([
      { airdate: '2018-02-01' },
      { airdate: '2018-02-10' },
      { airdate: '2018-02-20' },
    ]);
    // $FlowExpectedError: Just passing what is needed to test resolver
    const nextEpisode = await resolveNextEpisode(dataloader, 1);
    expect(nextEpisode).toBeNull();
  });
});
