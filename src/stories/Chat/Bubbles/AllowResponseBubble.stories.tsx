import React from "react";
import { Story, Meta } from "@storybook/react";
import AllowResponseBubble from "../../../CustomizedComponent/Chat/Bubbles/AllowResponseBubble";
import { AllowResponseBubbleProps } from "../../../CustomizedComponent/Chat/Bubbles/AllowResponseBubble";
export default {
  title: "CAPA DesignSystem/Component/Bubbles/AllowResponse",
  component: AllowResponseBubble,
  argTypes: {},
} as Meta;

const Template: Story<AllowResponseBubbleProps> = (args) => (
  <AllowResponseBubble {...args} />
);

export const Default = Template.bind({});
Default.args = {};
