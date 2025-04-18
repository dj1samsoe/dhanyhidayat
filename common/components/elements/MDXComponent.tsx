import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  children: string;
}

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => (
  <div className="table-container">
    <table className="table w-full">{children}</table>
  </div>
);

const MDXComponent = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: props => (
          <a className="text-sky-700 hover:text-sky-400 hover:underline cursor-pointer" target="_blank" {...props} />
        ),
        p: props => <div {...props} />,
        h2: props => <h2 className="text-xl font-medium dark:text-neutral-300" {...props} />,
        h3: props => <h3 className="text-[18px] leading-snug pt-4 font-medium dark:text-neutral-300" {...props} />,
        ul: props => <ul className="pl-10 space-y-1 list-disc pb-5" {...props} />,
        ol: props => <ol className="pl-10 space-y-1 list-decimal pb-5" {...props} />,
        code: props => <CodeBlock {...props} />,
        blockquote: props => (
          <blockquote
            className="pl-6 py-3 text-lg border-l-[5px] border-neutral-700 border-l-cyan-500 font-medium bg-neutral-200 dark:bg-neutral-800 rounded-br-2xl text-cyan-800 dark:text-cyan-200"
            {...props}
          />
        ),
        table: props => <Table {...props} />,
        th: props => <th className="border dark:border-neutral-600 py-1 px-3 text-left">{props.children}</th>,
        td: props => <td className="border dark:border-neutral-600  py-1 px-3">{props.children}</td>
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MDXComponent;
