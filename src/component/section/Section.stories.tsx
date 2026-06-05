import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Section } from "../section/Section";
import { Card, CardContent, CardImage, CardFooter } from "../card";
import { Cheader } from "../header/Cheader";
import { Icon } from "../header/Icon";
import { NavBar } from "../header/NavBar";
import { SearchBar } from "../header/SearchBar";
import { Drawer } from "../header/Drawer";
import { FooterContact } from "../footer/FooterContact";
import { FooterBottom } from "../footer/FooterBottom";
import { QuickLink } from "../footer/QuickLink";
import { FooterIcon } from "../footer/FooterIcon";
import { Cfooter } from "../footer/Cfooter";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";


const meta = {
  component: Section,

  subcomponents: {
    Card,
    CardContent,
    CardImage,
    CardFooter,
  },

  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LandingPage: Story = {
  render: () => (
    <div className="w-full scroll-smooth">
      <div className="sticky top-0 z-50 bg-white">
        <Cheader>
          <div className="flex min-w-10 items-center gap-4 lg:gap-10">
            <Icon alt="QTEK Logo" logo="/icon.svg" title="QTEK" />

            <NavBar
              navBar={[
                { id: 1, href: "#home", label: "Home" },
                { id: 2, href: "#about", label: "About" },
                { id: 3, href: "#services", label: "Services" },
                { id: 4, href: "#contact", label: "Contact" },
              ]}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <SearchBar />

            <Drawer
              navDrawer={[
                { id: 1, href: "#home", label: "Home" },
                { id: 2, href: "#about", label: "About" },
                { id: 3, href: "#services", label: "Services" },
                { id: 4, href: "#contact", label: "Contact" },
              ]}
            />
          </div>
        </Cheader>
      </div>

      <Section id="home" title="Dashboard" style="bg-gray-100">
        <div
          className="
            flex
            min-h-[70vh]
            items-center
            justify-center

            rounded-2xl

            bg-white

            p-10

            shadow-md
          "
        >
          <div className="max-w-2xl text-center">
            <h1
              className="
                mb-4

                text-4xl
                font-bold

                md:text-6xl
              "
            >
              Welcome To My Website
            </h1>

            <p
              className="
                text-base
                text-gray-600

                md:text-lg
              "
            >
              A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </Section>

      <Section id="about" title="About Us" style="bg-white">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            justify-items-center
            md:grid-cols-3
          "
        >
          <Card>
            <CardContent
              title="Vision"
              description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Card>

          <Card>
            <CardContent
              title="Mission"
              description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Card>

          <Card>
            <CardContent
              title="Pillars"
              description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Card>
        </div>
      </Section>

      <Section id="services" title="Services" style="bg-gray-100">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            justify-items-center
            md:grid-cols-2
            
          
          "
        >
          <Card>
            <CardContent
              title="Web Design"
              description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Card>

          <Card>
            <CardContent
              title="Development"
              description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact" style="bg-white">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            justify-items-center
            md:grid-cols-1
          "
        >
          <Card>
            <CardContent
              title="Get In Touch"
              description="A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Card>
        </div>
      </Section>

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
    </div>
  ),
};



