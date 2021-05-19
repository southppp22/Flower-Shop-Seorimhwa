import React from "react";
import { Story } from "@storybook/react";

import Label, { Props } from ".";

export default {
  title: "Atoms / Label",
};

const Template: Story<Props> = (args) => <Label {...args} />;

export const general = Template.bind({});
general.args = {
  name: "label",
};
