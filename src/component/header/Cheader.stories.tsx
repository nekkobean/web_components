
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cheader } from "./Cheader";

import { Drawer } from "./Drawer";
import { SearchBar } from "./SearchBar";
import { Icon } from "./Icon";
import { NavBar } from "./NavBar";

const meta = {
  component: Cheader,

  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Cheader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-light-gray">
      <Cheader>
        <div className=" flex items-center gap-4 lg:gap-10 min-w-10">
          <Icon alt="" logo="/icon.svg" title=" QTEK " />
          <NavBar navBar={[
            { id: 1, href: "#", label: "Home" },
            { id: 2, href: "#", label: "Services" },
            { id: 3, href: "#", label: "Contact" }
          ]} />
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0"        >
        <SearchBar />
        <Drawer navDrawer={[
          { id: 1, href: "#", label: "Home" },
          { id: 2, href: "#", label: "Services" },
          { id: 3, href: "#", label: "Contact" }
        ]} />
        </div>
      </Cheader>
    </div>
  ),
};
