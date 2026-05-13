import * as React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardImage } from "./CardImage";
import { CardFooter } from "./CardFooter";
import { Button } from "../button";

const meta = {
  //  The component you're working on
  component: Card,
  subcomponents: { CardContent, CardImage, CardFooter },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
//  Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;
export const CardWithImage: Story = {
  render: (args) => (
    <Card {...args}>
      <CardImage alt="Qtek" image="/qtek.png" />
      <CardContent
        title="My Company"
        description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CardFooter>
        <div className="flex gap-4">
          <Button variant="primary" label="Click Me" />
          <Button variant="secondary" label="Go Back" />
        </div>
      </CardFooter>
    </Card>
  ),
};

export const CardWithoutImage: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent
        title="My Company"
        description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CardFooter>
        <div className="flex gap-4">
          <Button variant="primary" label="Click Me" />
          <Button variant="secondary" label="Go Back" />
        </div>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCardWithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent
        title="My Company"
        description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CardFooter>
        <div className="flex gap-4">
          <Button variant="primary" label="Click Me" />
          <Button variant="secondary" label="Go Back" />
        </div>
      </CardFooter>
    </Card>
  ),
};
export const SimpleCard: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent
        title="My Company"
        description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Card>
  ),
};
