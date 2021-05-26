import React from "react";
import { Story } from "@storybook/react";

import Counter from "./index";

export default {
  title: "Molecules / Counter",
  decorators: [
    (Story: any): React.ReactElement => (
      <div
        style={{
          width: "10rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template: Story = (args) => <Counter {...args} />;

export const general = Template.bind({});
