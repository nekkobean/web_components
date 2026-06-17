import React from "react";
import "web_components/src/themes/tailwind.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
return (
    <>
        <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
            className="w-full max-w-md bg-white shadow-lg"
            role="dialog"
            aria-modal="true"
            >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
            onClick={onClose}
            className= "flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-md"
            aria-label="Close modal"
        >
           <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
            />
            </svg>
        </button>
        </div>
        <div className="p-5">
            {children}
        </div>
        </div>
        </div>
    </>
);
};