import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input, Typography } from "../../CustomizedComponent";
import { CustomizedInputProps } from "../../CustomizedComponent/Input";

export default {
  title: "CAPA DesignSystem/Component/Input",
  component: Input,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: "radio",
      description: "인풋 크기",
      defaultValue: "small",
    },
    fullWidth: { control: "boolean", description: "전체너비인풋 여부" },
    placeholder: { control: "text", description: "인풋 내부 안내문구 설정" },
    disabled: { control: "boolean", description: "비활성화" },
    labelPlacement: {
      options: ["top", "left"],
      control: "radio",
      description: "라벨 위치",
    },
    inputLabel: { control: "text", description: "인풋 라벨 문구" },
    labelSubtext: {
      control: "text",
      description: "인풋 라벨 설명문구(라벨 위치 top인 경우에만 표시)",
    },
  },
} as Meta;

const Template: Story<CustomizedInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  placeholder: "small input",
  size: "small",
};

export const LeftLabel = Template.bind({});
LeftLabel.args = {
  ...Default.args,
  inputLabel: (
    <Typography variant="body1" color="textPrimary">
      좌측라벨
    </Typography>
  ),
  labelPlacement: "left",
};

export const TopLabel = Template.bind({});
TopLabel.args = {
  ...Default.args,
  inputLabel: (
    <Typography variant="body1" color="textPrimary">
      상단라벨
    </Typography>
  ),
  labelSubtext: (
    <Typography variant="caption" color="textSecondary">
      인풋관련 Subtext입니다
    </Typography>
  ),
  labelPlacement: "top",
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  placeholder: "medium input",
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  placeholder: "disabled input",
  size: "small",
  disabled: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  ...Default.args,
  multiline: true,
};

export const onError = Template.bind({});
onError.args = {
  ...Default.args,
  error: true,
};

export const onErrorWHelpertext = Template.bind({});
onErrorWHelpertext.args = {
  ...Default.args,
  error: true,
  helperText: "error!",
};
