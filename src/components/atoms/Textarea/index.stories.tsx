import React from "react";
import { Story } from "@storybook/react";

import Textarea, { Props } from ".";

export default {
  title: "Atoms / Textarea",
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["normal", "success", "error", "alert"],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", width: "40rem", height: "10rem" }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const general = Template.bind({});
general.args = {
  placeholder: "placeholder",
  disabled: false,
  state: "normal",
};
