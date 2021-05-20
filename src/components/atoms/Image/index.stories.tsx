import React from "react";
import { Story } from "@storybook/react";

import Image, { Props } from "./index";

export default {
  title: "Atoms / Image",
  decorators: [
    (Story: any): React.ReactElement => (
      <div
        style={{
          margin: "3em",
          width: "50rem",
          height: "20rem",
          border: "1px solid green",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template: Story<Props> = (args) => <Image {...args} />;

export const general = Template.bind({});
general.args = {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MWlcOdyS4z-DArymL3ndm2PjBj-lhcpCng&usqp=CAU",
  alt: "sample",
};
