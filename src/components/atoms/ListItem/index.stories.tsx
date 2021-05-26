import React from "react";
import { Story } from "@storybook/react";

import ListItem, { Props } from ".";

export default {
  title: "Atoms / ListItem",
};

const Template: Story<Props> = (args) => <ListItem {...args} />;

export const general = Template.bind({});
general.args = {
  name: "test",
};
