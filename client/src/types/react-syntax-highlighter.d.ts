declare module 'react-syntax-highlighter' {
  import { ComponentType, ReactNode } from 'react';

  interface SyntaxHighlighterProps {
    language: string;
    style: any;
    customStyle?: React.CSSProperties;
    wrapLines?: boolean;
    showLineNumbers?: boolean;
    lineProps?: (lineNumber: number) => React.CSSProperties;
    PreTag?: string;
    children: ReactNode;
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>;
  export const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const atomDark: any;
  export const tomorrow: any;
  export const prism: any;
} 