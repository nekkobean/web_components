import { ReactNode } from 'react';
export interface CardContentProps {
    /** Accepts plain text or JSX (e.g. <>Line 1<br />Line <b>2</b></>) for full control over bold/italic/line breaks */
    title: ReactNode;
    description: ReactNode;
    /** Optional style overrides if you want to tweak font/size without touching every call site */
    titleClassName?: string;
    descriptionClassName?: string;
}
export declare const CardContent: React.FC<CardContentProps>;
