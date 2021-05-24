import React from "react";
import { Story } from "@storybook/react";

import Select, { Props } from "./index";

export default {
  title: "Molecules / Select",
};

const Template: Story<Props> = (args) => <Select {...args} />;

export const general = Template.bind({});
general.args = {
  labelProps: {
    name: "꽃색상",
  },
  selectList: ["빨강", "노랑", "파랑", "분홍", "알아서 해주세요"],
};
