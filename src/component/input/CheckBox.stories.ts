import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckBox } from "./CheckBox";
const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  args: {
    id: "checkbox-1",
    label: "Accept Terms & Conditions",
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    label: "I am a required field",
    required: true,
    helperText: "\n",
  },
};

export const Disabled: Story = {
  args: {
    label: "I am disabled",
    disabled: true,
  },
};
