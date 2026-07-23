import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TextField } from "./TextField";
const meta = {
  component: TextField,
    argTypes: {
    type: {
      control: "select", 
      options: ["text", "email", "password", "number"],
    },
  },
   
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>; 

export const Email: Story = {
  args: {
    id: "Email",
    labelText: "Email",
    placeholder: "Enter your email",
    type: "email", 
  },
    parameters: {
    layout: "centered",
    },
};

export const InvalidEmail: Story = {
  args: {
    id: "Email",
    labelText: "Email",
    placeholder: "Invalid email address",
    type: "email",
    error: true,
    helperText: "Please enter a valid email address."
  },
    parameters: {
    layout: "centered",
    },
};

export const Number: Story = {
  args: {
    id: "Number",
    labelText: "Number",
    placeholder: "Enter a number",
    type: "number",
  },
    parameters: {
    layout: "centered",
    },
};

export const Password: Story = {
  args: {
    id: "Password",
    labelText: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
    parameters: {
    layout: "centered",
    },
};


