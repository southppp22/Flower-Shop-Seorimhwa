import React from "react";
import { Story } from "@storybook/react";

import Radio from "./index";

export default {
  title: "Molecules / Radio",
};

const Template: Story = (args) => <Radio name="test" {...args} />;

export const general = Template.bind({});
general.args = {
  name: "test",
};
