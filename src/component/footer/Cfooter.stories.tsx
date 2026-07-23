import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cfooter } from "./Cfooter";
import { FooterIcon } from "./FooterIcon";
import { QuickLink } from "./QuickLink";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";
import { Icon } from "../header/Icon";

const meta = {
  component: Cfooter,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Cfooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Cfooter>
        <FooterIcon description="Building modern and scalable digital solutions for businesses and organizations.">
            <div className="scale-150 origin-left">
          <Icon alt="QTEK Logo" logo="/icon.svg" title="QTEK" />
        </div>
        </FooterIcon>

        <QuickLink
          title="Quick Links"
          links={[
            {
              id: 1,
              label: "Home",
              href: "#home",
            },
            {
              id: 2,
              label: "About",
              href: "#about",
            },
            {
              id: 3,
              label: "Services",
              href: "#services",
            },
            {
              id: 4,
              label: "Contact",
              href: "#contact",
            },
          ]}
        />

        <FooterContact
          email="hello@qtek.com"
          phone="+63 900 000 0000"
          socials={[
            {
              id: 1,
              label: "Facebook",
              href: "#",
            },
            {
              id: 2,
              label: "LinkedIn",
              href: "#",
            },
            {
              id: 3,
              label: "GitHub",
              href: "#",
            },
          ]}
        />
      </Cfooter>

      <FooterBottom copyright="© 2026 QTEK. All rights reserved." />
    </>
  ),
};
