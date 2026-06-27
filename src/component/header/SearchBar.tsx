import "../../themes/tailwind.css";
import React, { useState } from "react";
import { Modal } from "../modal/Modal";

export interface SearchBarProps {
  placeholder?: string;
  style?: string;
  children?: React.ReactNode;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  style,
  children,
}) => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className={`relative shrink-0 ${style || ""}`}>
      <div className="hidden md:block relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="
            absolute
            left-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-gray-400
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          className="
            w-27.5
            sm:w-40
            md:w-50
            lg:w-60
            rounded-md
            border
            border-light-gray
            bg-white
            px-3
            py-2
            pl-9
            text-xs
            sm:text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue
          "
        />
      </div>
      <button
        onClick={() => setOpenSearch(true)}
        className="
          shrink-0
          flex
          md:hidden
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
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="
            h-6
            w-6
            text-gray-700
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <Modal
        isOpen={openSearch}
        title="Search"
        onClose={() => setOpenSearch(false)}
      >
        {children ? (children) : (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-gray-400
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              autoFocus
              type="text"
              placeholder={placeholder}
              className="
                w-full
                rounded-md
                border
                border-light-gray
                bg-white
                px-3
                py-2
                pl-9
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue
              "
            />
          </div>
        )}
      </Modal>
    </div>
  );
};