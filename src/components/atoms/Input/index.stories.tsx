import React from "react";
import { Story } from "@storybook/react";

import Input, { Props } from ".";

export default {
  title: "Atoms / Input",
};

const Template: Story<Props> = (args) => <Input {...args} />;

export const general = Template.bind({});
general.args = {
  name: "test",
  placeholder: "placeholder",
  disabled: false,
  invalid: false,
};
