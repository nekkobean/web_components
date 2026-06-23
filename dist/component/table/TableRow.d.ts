import { default as React } from 'react';
import { TableRowCell } from './types';
export interface TableRowProps {
    rowData: TableRowCell[];
    style?: string;
}
export declare const TableRow: React.FC<TableRowProps>;
