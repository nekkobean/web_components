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
  render: (args) => (
    <div className="bg-primary w-full max-w-sm rounded-lg shadow-md overflow-hidden"> 
      <CardContent
        {...args}
      />
    </div>
  ),
  args: {
    title: "Card Title",  
    description: "This is a description of the card content. It provides additional information about the card.",
  },
};


