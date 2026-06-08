export interface TableHeadCell {
    key: number;
    name: string;
    value: string;
    align?: "left" | "center" | "right";
    style?: string;
}
export interface TableRowCell {
    key: number;
    value: string;
    align?: "left" | "center" | "right";
    style?: string;
}
