import React, { useEffect, useRef } from "react";
const defaultStyle: React.CSSProperties = {
  display: "block",
  overflow: "hidden",
  padding: "20px",
  resize: "none",
  width: "100%",
  minHeight: "50px",
  backgroundColor: "#F3F4F6",
  border: "1px solid #ccc",
};

type Props = {
  style?: React.CSSProperties;
  etc?: any;
  value: string;
  onUpdate: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<Props> = ({
  style = defaultStyle,
  onUpdate,
  value,
  ...etc
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      style={style}
      {...etc}
      value={value}
      onChange={onUpdate}
    />
  );
};

export default Textarea;
