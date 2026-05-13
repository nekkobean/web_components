import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CardImage } from "./CardImage";
const meta = {
  component: CardImage,
  argTypes: {
    alt: {
      control: "text",
    },
    image: {
      control: "text",
    },
  },
} satisfies Meta<typeof CardImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardImg: Story = {
  args: {
    alt: "Card Image",
    image: "/qtek.png",
  },
};




