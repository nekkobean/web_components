import React from "react";
import { Cheader } from "../header/Cheader";
import { NavBar } from "../header/NavBar";
import { Drawer } from "../header/Drawer";
import { Icon } from "../header/Icon";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { SearchBar } from "../header/SearchBar";
import { Cfooter } from "../footer/Cfooter";
import { FooterIcon } from "../footer/FooterIcon";
import { QuickLink } from "../footer/QuickLink";
import { FooterContact } from "../footer/FooterContact";
import { FooterBottom } from "../footer/FooterBottom";
import "web_components/src/themes/tailwind.css";

export interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] =
    React.useState("Home");

  const navItems = [
    { id: 1, href: "#home", label: "Home" },
    { id: 2, href: "#about", label: "About" },
    { id: 3, href: "#services", label: "Services" },
    { id: 4, href: "#contact", label: "Contact" },
  ];

  return (
    <div className="w-full scroll-smooth">
  
      <div className="sticky top-0 z-50 bg-white">
        <Cheader>
          <div className="flex items-center gap-4 lg:gap-10">
            <Icon
              logo="/icon.svg"
              title="QTEK"
            />

            <NavBar
              navBar={navItems}
              onItemClick={setCurrentPage}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                        <SearchBar />

          <Drawer
            navDrawer={navItems}
            onItemClick={setCurrentPage}
          />
          </div>
        </Cheader>
      </div>

      <div className=" 
            mx-auto
            max-w-full
            px-6
            py-4
            sticky
            z-40
            top-16
            bg-light-gray">
        <Breadcrumbs
          items={[
            {
              id: 1,
              label: currentPage,
              href: "#",
            },
          ]}
        />
      </div>

   
      {children}
      
      <Cfooter>
        <FooterIcon description="Building modern and scalable digital solutions.">
          <div className="scale-150 origin-left">
            <Icon logo="/icon.svg" title="QTEK" />
          </div>
        </FooterIcon>

        <QuickLink
          title="Quick Links"
          links={navItems}
          onItemClick={setCurrentPage}
        />

        <FooterContact
          email="hello@qtek.com"
          phone="+63 900 000 0000"
          socials={[
            { id: 1, label: "Facebook", href: "#" },
            { id: 2, label: "LinkedIn", href: "#" },
            { id: 3, label: "GitHub", href: "#" },
          ]}
        />

        <FooterBottom copyright="© 2026 QTEK. All rights reserved." />
      </Cfooter>
    </div>
  );
};