"use client";
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
import { NavItem } from "../header";
import "../../themes/tailwind.css";

export interface LandingLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  logo?: string;
  companyTitle?: string;
  description?: string;
  email?: string;
  phone?: string;
  copyright?: string;
  socials?: {
    id: number;
    label: string;
    href: string;
  }[];
  headerClassName?: string;
  companyTitleClassName?: string;
  breadcrumbClassName?: string;
  breadcrumbTextClassName?: string;
  footerClassName?: string;
  footerBottomClassName?: string;
  navLabelClassName?: string;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  children,
  navItems,
  logo,
  companyTitle,
  description = "",
  email = "",
  phone = "",
  socials = [],
  copyright = "",
  headerClassName = "bg-white",
  companyTitleClassName = "",
  breadcrumbClassName = "bg-light-gray",
  footerClassName = "",
  footerBottomClassName = "",
  breadcrumbTextClassName = "",
  navLabelClassName = "",
}) => {
  const [currentPage, setCurrentPage] = React.useState(
    navItems[0]?.label || "Home",
  );

  return (
    <div className="w-full scroll-smooth">
      <div className={`sticky top-0 z-50`}>
        <Cheader style={headerClassName}>
          <div className="flex items-center gap-4 lg:gap-10">
            <Icon
              logo={logo || ""}
              title={companyTitle || "Company Name"}
              titleClassName={companyTitleClassName}
            />
            <NavBar
              navBar={navItems}
              onItemClick={setCurrentPage}
              navLabelClassName={navLabelClassName}
            />
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <SearchBar />
            <Drawer navDrawer={navItems} onItemClick={setCurrentPage} />
          </div>
        </Cheader>
      </div>

      <div
        className={`mx-auto max-w-full px-6 py-4 sticky z-40 top-16 ${breadcrumbClassName || "bg-light-gray"}`}
      >
        <Breadcrumbs
          items={[{ id: 1, label: currentPage, href: "#" }]}
          breadcrumbTextClassName={breadcrumbTextClassName}
        />
      </div>

      {children}

      <Cfooter className={footerClassName}>
        <FooterIcon description={description}>
          <div className="scale-150 origin-left">
            <Icon
              logo={logo || ""}
              title={companyTitle || "Company Name"}
              titleClassName={companyTitleClassName}
            />
          </div>
        </FooterIcon>
        <QuickLink
          title="Quick Links"
          links={navItems}
          onItemClick={setCurrentPage}
        />
        <FooterContact email={email} phone={phone} socials={socials} />
        <FooterBottom
          copyright={copyright || " "}
          footerBottomClassName={footerBottomClassName}
        />
      </Cfooter>
    </div>
  );
};
