import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "../components/Input";

import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  argTypes: {
    noRadius: { control: { type: "boolean" } },
    buttonPosition: {
      options: ["inside", "outisde"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const InputField: Story = {
  args: {
    className: "",
    noRadius: undefined,
    placeholder: "Placeholder",
    value: "",
  },
  render: ({ ...args }) => <Input {...args} />,
};

export const ButtonOutsideRoundedInput: Story = {
  args: {
    className: "",
    noRadius: undefined,
    placeholder: "Placeholder",
    buttonPosition: "outside",
    buttonValue: "Search",
    value: "",
  },
  render: ({ ...args }) => <Input {...args} />,
};

export const ButtonOutsideSquareInput: Story = {
  args: {
    className: "",
    noRadius: true,
    placeholder: "Placeholder",
    buttonPosition: "outside",
    buttonColour: "",
    buttonValue: "Search",
    value: "",
  },
  render: ({ ...args }) => <Input {...args} />,
};

export const InputWithCustomButtonColour: Story = {
  args: {
    className: "",
    noRadius: undefined,
    placeholder: "Placeholder",
    buttonPosition: "outside",
    buttonColour: "#ff0000",
    buttonValue: "Search",
    value: "",
  },
  render: ({ ...args }) => <Input {...args} />,
};
