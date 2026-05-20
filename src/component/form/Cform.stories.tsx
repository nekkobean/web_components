import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cform } from "./Cform";
import { Button } from "@/component/button";
import { CheckBox, Select, TextField } from "@/component/input";

const meta = {
  component: Cform,
  subcomponents: { TextField, Select, CheckBox, Button },

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Cform>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultForm: Story = {
  render: (args) => (
    <Cform {...args}>
      <div className="flex flex-col gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TextField
          labelText="Name"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
        <TextField
          labelText="Email"
          id="email"
          placeholder="Enter your email"
          type="email"
        />
        <Select
          label="Country"
          options={[
            { key: 0, name: "", value: "Select a Country" },
            { key: 1, name: "option1", value: "Germany" },
            { key: 2, name: "option2", value: "China" },
            { key: 3, name: "option3", value: "Iran" },
          ]}
        />
        <CheckBox
          id="terms"
          label="Accept Terms & Conditions"
          helperText="You must accept the terms and conditions to proceed."
        />
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="primary" label="Submit" />
          <Button variant="secondary" label="Cancel" />
        </div>
      </div>
    </Cform>
  ),
};
