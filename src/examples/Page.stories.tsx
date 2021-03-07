import React from "react";

import { Story, Meta } from "@storybook/react";

import { Page } from "./Page";
import { PageProps } from "./PageProps";
import * as HeaderStories from "../components/Header.stories";

export default {
  title: "Examples/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
