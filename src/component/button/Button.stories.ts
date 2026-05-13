
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {

  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "restore", "delete", "disabled"],
      disabled: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button variant label="Button" />`
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
     disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};
export const Restore: Story = {
  args: {
    variant: "restore",
    label: "Restore",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};
export const Delete: Story = {
  args: {
    variant: "delete",
    label: "Delete",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};
export const Disabled: Story = {
  args: {
    variant: "disabled",
    label: "Disabled",
    disabled: true,
  },
  parameters: {
    layout: "centered",
  },
};

export const Loading: Story = {
  args: {
    variant: "disabled",
    label: "Loading...",
    isLoading: true,
    disabled: true,
  },
  parameters: {
    layout: "centered",
  },
};