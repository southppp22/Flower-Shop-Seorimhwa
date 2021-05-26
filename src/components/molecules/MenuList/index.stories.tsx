import React from "react";
import { Story } from "@storybook/react";

import MenuList, { Props } from ".";

export default {
  title: "Molecules / MenuList",
};

const Template: Story<Props> = (args) => <MenuList {...args} />;

export const general = Template.bind({});
general.args = {
  title: "쇼핑정보",
  menuArr: ["쿠폰", "주문 배송", "취소 / 반품", "반품 현황"],
};
