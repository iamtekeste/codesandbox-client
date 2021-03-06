// @flow
import React from 'react';
import type { User } from 'common/types';

import Row from 'app/components/flex/Row';

import ProfileInfo from './ProfileInfo';
import Stats from './Stats';

type Props = {
  user: User,
};

export default ({ user }: Props) => (
  <Row>
    <ProfileInfo
      username={user.username}
      name={user.name}
      avatarUrl={user.avatarUrl}
    />
    <Stats
      likeCount={user.receivedLikeCount}
      viewCount={user.viewCount}
      forkCount={user.forkedCount}
    />
  </Row>
);
