import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../components/Button";

import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & { buttonText: string };

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "warning"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Primary Button",
    variant: "primary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const SquarePrimary: Story = {
  args: {
    buttonText: "Primary Button",
    variant: "primary",
    noRadius: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const DisabledPrimary: Story = {
  args: {
    buttonText: "Primary Button",
    variant: "primary",
    disabled: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const JustIcon: Story = {
  args: {
    icon: (
      <img
        alt="icon"
        className="h-4 w-4"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
      />
    ),
    variant: "primary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const IconAndText: Story = {
  args: {
    buttonText: "Primary Button",
    icon: (
      <img
        alt="icon"
        className="h-4 w-4"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
      />
    ),
    variant: "primary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Secondary: Story = {
  args: {
    buttonText: "Secondary Button",
    className: "",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Ghost: Story = {
  args: {
    buttonText: "Ghost Button",
    className: "",
    variant: "ghost",
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
