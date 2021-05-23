import React from "react";
import { Story } from "@storybook/react";

import OrderItem, { Props } from "./index";

export default {
  title: "Molecules / OrderItem",
  decorators: [
    (Story: any): React.ReactElement => (
      <div
        style={{
          width: "100%",
          border: "1px solid #ccc",
          padding: "3rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template: Story<Props> = (args) => <OrderItem {...args} />;

export const general = Template.bind({});
general.args = {
  to: "/",
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MWlcOdyS4z-DArymL3ndm2PjBj-lhcpCng&usqp=CAU",
  title: "카네이션",
  price: "35,000",
  quantity: 1,
};
