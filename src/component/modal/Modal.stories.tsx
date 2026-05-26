import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Modal } from "./Modal";
import { Button } from "../button";


const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  render: () => {
    const [IsOpen, setOpen] = useState(false);

    return (
      <div className="p-6">
        <Button
          label="Open Modal"
          onClick={() => setOpen(true)}
        />

        <Modal
          isOpen={IsOpen}
          title="My Modal"
          onClose={() => setOpen(false)}
        >
          <p>This is working modal content</p>
        </Modal>
      </div>
    );
  },
};