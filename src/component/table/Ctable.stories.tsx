import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Ctable } from "./Ctable";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";

const meta = {
  component: Ctable,
} satisfies Meta<typeof Ctable>;

export default meta;

type Story = StoryObj<typeof meta>;

const headers = [
  { key: 1, name: "name", value: "Name" },
  { key: 2, name: "role", value: "Role" },
  { key: 3, name: "in", value: "In" },
  { key: 4, name: "out", value: "Out" },
  { key: 5, name: "status", value: "Status" },
];

const rows = [
  { name: "Eloisa", role: "Dev", in: "09:00", out: "17:00", status: "Active" },
  { name: "Marie", role: "Dev", in: "08:00", out: "16:00", status: "Break" },
  { name: "Llena", role: "Design", in: "10:00", out: "18:00", status: "Offline" },
  { name: "Llena", role: "Design", in: "10:00", out: "18:00", status: "Offline" },
  
];

export const Default: Story = {
  render: () => (
    <Ctable style="rounded-none">
      <TableHead rowData={headers} />

      <TableBody>
        {rows.map((row, i) => (
          <TableRow
            key={i}
            rowData={headers.map((h) => ({
              key: h.key,
              value: row[h.name as keyof typeof row],
            }))}
          />
        ))}
      </TableBody>
    </Ctable>
  ),
};
