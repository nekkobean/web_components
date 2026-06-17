export type TableAlignment =
  | "left"
  | "center"
  | "right";

export interface TableHeadCell {
  key: number;
  name: string;
  value: string;
  align?: TableAlignment;
  style?: string;
}

export interface TableRowCell {
  key: number;
  value: string;
  align?: TableAlignment;
  style?: string;
}