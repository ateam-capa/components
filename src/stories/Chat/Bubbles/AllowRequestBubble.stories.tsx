import React from "react";
import { Story, Meta } from "@storybook/react";
import AllowRequestBubble from "../../../CustomizedComponent/Chat/Bubbles/AllowRequestBubble";
import { AllowRequestBubbleProps } from "../../../CustomizedComponent/Chat/Bubbles/AllowRequestBubble";
export default {
  title: "CAPA DesignSystem/Component/Bubbles/AllowRequest",
  component: AllowRequestBubble,
  argTypes: {},
} as Meta;

const Template: Story<AllowRequestBubbleProps> = (args) => (
  <AllowRequestBubble {...args} />
);

export const Allow = Template.bind({});
Allow.args = {
  permission: true,
};

export const NotAllow = Template.bind({});
NotAllow.args = {
  permission: false,
};
