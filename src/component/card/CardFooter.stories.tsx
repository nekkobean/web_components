import * as React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CardFooter } from "./CardFooter";
import { Button } from "../button";

const meta = {
  component: CardFooter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardFooter>;

export default meta;

type Story = StoryObj<typeof meta>;
export const CardFooterStory: Story = {
  render: () => (
    <CardFooter>
      <div className="flex gap-4">
        <Button variant="primary" label="Click Me" />
        <Button variant="secondary" label="Go Back" />
      </div>
    </CardFooter>
  ),
};
