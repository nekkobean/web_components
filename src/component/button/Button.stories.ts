// Button.stories.ts
// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  // 👇 The component you're working on
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "restore", "delete", "disabled"],
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
  },
  parameters: {
    layout: "centered",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
  parameters: {
    layout: "centered",
  },
};
export const Restore: Story = {
  args: {
    variant: "restore",
    label: "Restore",
  },
  parameters: {
    layout: "centered",
  },
};
export const Delete: Story = {
  args: {
    variant: "delete",
    label: "Delete",
  },
  parameters: {
    layout: "centered",
  },
};
export const Disabled: Story = {
  args: {
    variant: "disabled",
    label: "Disabled",
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
  },
  parameters: {
    layout: "centered",
  },
};