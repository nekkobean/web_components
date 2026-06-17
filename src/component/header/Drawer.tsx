import React from "react";
import { useState } from "react";
import "web_components/src/themes/tailwind.css";

export interface DrawerProps {
  navDrawer: { id: number; href: string; label: string }[];
  style?: string;
  onItemClick?: (label: string) => void;
}

export const Drawer: React.FC<DrawerProps> = ({ navDrawer = [], style, onItemClick }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenDrawer(true)}
        className=" flex md:hidden items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="
            h-6
            w-6
            text-gray-700
          "
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {openDrawer && (
        <div
          onClick={() => setOpenDrawer(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
      <aside
        className={`
          fixed top-0 
          left-0 z-50 
          h-screen w-65
           bg-white 
           shadow-lg 
          transition-transform duration-300

          ${openDrawer ? "translate-x-0" : "-translate-x-full"}

          md:hidden

          ${style || ""}
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-light-gray

            px-5
            py-4
          "
        >
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpenDrawer(false)}
              className="
              flex
              items-center
              justify-center

              h-10
              w-10

              rounded-md

              hover:bg-gray-100
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="
                h-6
                w-6

                text-gray-700
              "
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06Z"
                clipRule="evenodd"
              />
            </svg>

          </button>
        </div>

        <div className="flex flex-col p-4">{navDrawer.map((item) => (
            <a
              key={item.id}
              href={item.href || "#"}
              onClick={() => {
                onItemClick?.(item.label);
                setOpenDrawer(false);
              }}
              className="
                rounded-md
                px-4
                py-3
                hover:bg-gray-100
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

