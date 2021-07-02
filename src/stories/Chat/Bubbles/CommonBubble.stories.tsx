import React from "react";
import { Story, Meta } from "@storybook/react";
import CommonBubble from "../../../CustomizedComponent/Chat/Bubbles/CommonBubble";
import { CommonBubbleProps } from "../../../CustomizedComponent/Chat/Bubbles/CommonBubble";
export default {
  title: "CAPA DesignSystem/Component/Bubbles/CommonBubble",
  component: CommonBubble,
  argTypes: {},
} as Meta;

const Template: Story<CommonBubbleProps> = (args) => <CommonBubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  isClient: true,
};
