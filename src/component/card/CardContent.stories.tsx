import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CardContent } from "./CardContent";
const meta = {
  
  component: CardContent,
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
} satisfies Meta<typeof CardContent>;

export default meta;

type Story = StoryObj<typeof meta>;


export const CardContentStory: Story = {
  args: {
    title: "Card Title",
    description: "This is the card content.",
  },
};


