import React from "react";
import { Story } from "@storybook/react";

import Info, { Props } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules / Info",
  argTypes: {
    bgImgSource: {
      control: {
        type: "select",
        options: [
          "https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/main_bouquet.jpg?alt=media&token=dac03a1b-a569-499d-a718-6ab86df7fadc",
          "https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/main_event.jpg?alt=media&token=591e2fc1-a2fc-41c0-80b8-72884b35c9ee",
          "https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/main_flower.jpg?alt=media&token=4fdd5f2a-8ae0-4cea-8f20-ea99071f4176",
        ],
      },
    },
  },
};

const Template: Story<Props> = (args) => <Info {...args} />;

export const general = Template.bind({});
general.args = {
  btnProps: {
    children: "Go for shopping",
    styletype: "black",
    to: "/example/",
    disabled: false,
    href: "#",
    fit: false,
    grow: false,
    onClick: action("onClick"),
  },
  bgImgSource:
    "https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/main_bouquet.jpg?alt=media&token=dac03a1b-a569-499d-a718-6ab86df7fadc",
  contents: "Please write detailed explanation for this page",
  title: "꽃",
};
