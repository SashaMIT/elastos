declare module 'react-syntax-highlighter/dist/cjs/prism' {
  import { ComponentType } from 'react';
  interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    customStyle?: any;
    lineProps?: (lineNumber: number) => any;
    wrapLines?: boolean;
    showLineNumbers?: boolean;
    children?: string;
    PreTag?: string | ComponentType<any>;
  }
  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  export const atomDark: any;
} 