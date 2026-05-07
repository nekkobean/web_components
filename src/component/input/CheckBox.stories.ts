import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckBox } from "./CheckBox";
const meta = {
  component: CheckBox,
  args: {
    id: "checkbox-1",
    label: "Accept Terms & Conditions",
    error: false,
    helperText: "You must accept the terms and conditions to proceed.",
    disabled: false,
    defaultChecked: false,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    label: "I am a required field",
    required: true,
    helperText: "",
    error: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "I am disabled",
    disabled: true,
    error: false,
  },
};

export const DefaultChecked: Story = {
  args: {
    label: "I am checked by default",
    defaultChecked: true,
    error: false,
  },
};
