import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  children: string;
};

const Preview: React.FC<Props> = ({ children }) => {
  return <ReactMarkdown children={children} remarkPlugins={[remarkGfm]} />;
};

export default Preview;
