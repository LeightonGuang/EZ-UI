import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../components/Button";

import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & { buttonText: string };

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: { options: ["primary", "warning"], control: { type: "select" } },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Primary Button",
    className: "",
    variant: "primary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Warning: Story = {
  args: {
    buttonText: "Warning Button",
    className: "",
    variant: "warning",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
