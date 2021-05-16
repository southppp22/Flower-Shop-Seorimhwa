import React from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Btn, { Props } from "./index";

export default {
  title: "Atoms / Btn",
  argTypes: {
    styletype: {
      control: {
        type: "select",
        options: [
          "black",
          "white",
          "gray",
          "yellow",
          "orange",
          "lightOrange",
          "lightGreen",
          "lightPurple",
          "pink",
          "transparent",
          "transparent-border",
          "transparent-hover",
        ],
      },
    },
  },
};

const Template: Story<Props> = (args) => <Btn {...args} />;

export const general = Template.bind({});
general.args = {
  styletype: "black",
  disabled: false,
  children: "button",
  fit: false,
  grow: false,
  onClick: action("onClick"),
};

export const anchor = Template.bind({});
anchor.args = {
  styletype: "black",
  children: "button",
  href: "#",
  fit: false,
  grow: false,
  onClick: action("onClick"),
};

export const link = Template.bind({});
link.args = {
  styletype: "black",
  children: "button",
  to: "#",
  fit: false,
  grow: false,
  onClick: action("onClick"),
};
