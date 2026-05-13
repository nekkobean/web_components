import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cform }  from "./Cform";
import { Button } from "@/component/button";
import { CheckBox, Select, TextField } from "@/component/input";

// import { TextField } from "../input/TextField";
// import { Select } from "../Select";
// import { CheckBox } from "../CheckBox";

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
        <TextField labelText="Name" id="name" type="text" placeholder="Enter your name" />
        <TextField labelText="Email" id="email" placeholder="Enter your email" type="email" />
      <Select label="Country" options={[
       {value: '', label: 'Select a Country'},
            { value: 'option1', label: 'Germany' },
            { value: 'option2', label: 'China' },
            { value: 'option3', label: 'Iran' }
      ]} />
      <CheckBox id="terms" label="Accept Terms & Conditions" helperText="You must accept the terms and conditions to proceed." />
      <div className="flex justify-end gap-2 mt-2">
      <Button variant="primary" label="Submit"  />
      <Button variant="secondary" label="Cancel" />
      </div>
     </div>
    </Cform>
  )
};  
   
