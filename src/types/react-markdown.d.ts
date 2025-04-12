declare module 'react-markdown' {
  import { ReactNode } from 'react';

  interface ReactMarkdownProps {
    children: string;
    components?: {
      [key: string]: React.ComponentType<any>;
    };
    remarkPlugins?: any[];
    rehypePlugins?: any[];
    className?: string;
  }

  const ReactMarkdown: React.FC<ReactMarkdownProps>;
  export default ReactMarkdown;
} 