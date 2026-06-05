import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import{ Breadcrumbs } from "./Breadcrumbs";

const meta = {
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WebDesign: Story = {
  args: {
    items: [
      {
        id: 1,
        label: "Home",
        href: "#",
      },
      {
        id: 2,
        label: "Services",
        href: "#",
      },
      {
        id: 3,
        label: "Web Design",
        href: "#",
      },
    ],
  },
};