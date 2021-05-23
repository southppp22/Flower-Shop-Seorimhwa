import React from "react";
import { Story } from "@storybook/react";

import Card, { Props } from "./index";

export default {
  title: "Molecules / Card",
};

const Template: Story<Props> = (args) => <Card {...args} />;

export const general = Template.bind({});
general.args = {
  to: "/",
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MWlcOdyS4z-DArymL3ndm2PjBj-lhcpCng&usqp=CAU",
  title: "카네이션",
  price: "35,000",
};
