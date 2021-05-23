import React from "react";
import { Story } from "@storybook/react";
import Icon, { Props } from ".";

export default {
  title: "Atoms / Icon",
  decorators: [
    (Story: any): React.ReactElement => (
      <Story />
    )
  ]
}

const Template: Story<Props> = (args) => <Icon {...args} />

export const general = Template.bind({});
general.args = {
  src: "https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/userIcon.png?alt=media&token=177d448e-7889-4260-9adb-7a32844cf786",
  alt: "sample",
  height: "20rem"
}