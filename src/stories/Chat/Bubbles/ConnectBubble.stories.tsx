import React from "react";
import { Story, Meta } from "@storybook/react";
import ConnectBubble from "../../../CustomizedComponent/Chat/Bubbles/ConnectBubble";
import { ConnectBubble as ConnectBubbleProps } from "../../../CustomizedComponent/Chat/Bubbles/ConnectBubble";
export default {
  title: "CAPA DesignSystem/Component/Bubbles/ConnectBubble",
  component: ConnectBubble,
  argTypes: {},
} as Meta;

const Template: Story<ConnectBubbleProps> = (args) => (
  <ConnectBubble {...args} />
);

export const Connected = Template.bind({});
Connected.args = {
  type: "CONNECTED",
};

export const NotConneted = Template.bind({});

NotConneted.args = {
  type: "NOT_CONNECTED",
};
