declare module 'react-syntax-highlighter/dist/cjs/prism' {
  import { ComponentType, ReactNode } from 'react';

  interface SyntaxHighlighterProps {
    language: string;
    style?: any;
    customStyle?: React.CSSProperties;
    wrapLines?: boolean;
    showLineNumbers?: boolean;
    lineProps?: (lineNumber: number) => { style: React.CSSProperties };
    PreTag?: string | ComponentType;
    children: ReactNode;
  }

  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  const styles: { [key: string]: any };
  export default styles;
} 