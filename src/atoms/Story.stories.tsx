import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import StoryComponent, { StoryProps } from './Story.component';

export default {
  title: 'Atoms/Story',
  component: StoryComponent,
};

const Template: Story<StoryProps> = (args) => <StoryComponent {...args} />;

export const MakeAStory = Template.bind({});
MakeAStory.args = {
    customerNeed: 'What did the customer need? (not business)',
    summarizedResult: 'for a good story, tell us a quip about the final result',
    obstacle: 'if there was any obstacle put it here',
    actions: ['list', 'of', 'action'],
    results: ['list', 'of', 'action'],
    lesson: 'what did you learn?'
  };