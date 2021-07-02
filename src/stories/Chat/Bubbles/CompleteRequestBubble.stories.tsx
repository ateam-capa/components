import React from "react";
import { Story, Meta } from "@storybook/react";
import CompleteRequestBubble from "../../../CustomizedComponent/Chat/Bubbles/CompleteRequestBubble";
import { CompleteRequestBubble as CompleteRequestBubbleProps } from "../../../CustomizedComponent/Chat/Bubbles/CompleteRequestBubble";
export default {
  title: "CAPA DesignSystem/Component/Bubbles/CompleteRequest",
  component: CompleteRequestBubble,
  argTypes: {},
} as Meta;

const Template: Story<CompleteRequestBubbleProps> = (args) => (
  <CompleteRequestBubble {...args} />
);

export const Default = Template.bind({});
Default.args = {
  permission: true,
};
