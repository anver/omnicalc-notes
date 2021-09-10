import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  children: string;
};

const Preview: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col mb-8 bg-white rounded-2xl shadow-xl">
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <ReactMarkdown children={children} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default Preview;
