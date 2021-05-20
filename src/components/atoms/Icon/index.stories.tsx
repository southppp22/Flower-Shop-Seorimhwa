import React from 'react';
import { text } from '@storybook/addon-knobs';

import Icon from '.';
import userIcon from '../../../assets/image/userIcon.png';

export default {
  title: 'Atoms / Icon',
}

export const index: React.FC = () => (
  <div style={{ padding: '1rem' }}>
    <Icon
      alt={text('alt', 'Google')}
      height={text('height', '2rem')}
      src={userIcon}
    />
  </div>
);

export const circular: React.FC = () => (
  <div style={{ padding: '1rem' }}>
    <Icon
      alt={text('alt', 'Google')}
      height={text('height', '2rem')}
      src={userIcon}
      circular
    />
  </div>
)