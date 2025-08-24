import React, { useState } from "react";
interface Props {
  children: string;
  maxLen: number;
}
const Expand = ({ children, maxLen }: Props) => {
  let display;
  const [expand, setExpand] = useState(false);
  if (children.length <= maxLen) return <p>{children}</p>;
  display = expand ? children : children.slice(0, maxLen);
  return (
    <div>
      {display}
      <button onClick={() => setExpand(!expand)}>
        {expand === true ? "Less" : "More"}
      </button>
    </div>
  );
};

export default Expand;
