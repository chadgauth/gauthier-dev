import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';
import StoryComponent, { StoryProps } from '../atoms/Story.component';

export default {
  title: 'Examples/Release',
  component: StoryComponent,
};

const Template: Story<any> = () => <StoryComponent
actions={[
  'Researched pipeline',
  'my code = previous pass',
  'email to go w/o E2E'
]}
customerNeed="Customer needed release as promised"
lesson="Put effort into your argument"
obstacle="E2E Failures"
results={[
  'team worked late (not my decision)',
  ' fixed pipeline'
]}
summarizedResult="By voicing the concern for the customer the team worked late when I was OOO"
/>;

export const End2End = Template.bind({});

