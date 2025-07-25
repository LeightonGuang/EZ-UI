import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../components/Button";

import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {};
