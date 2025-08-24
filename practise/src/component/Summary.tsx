import React, { useState } from "react";
interface Props {
  children: string;
  maxChar: number;
}
const Summary = ({ children, maxChar }: Props) => {
  const [hide, setHide] = useState(true);
  const display = hide ? children.slice(0, maxChar) + "..." : children;
  console.log(display.length);
  return (
    <div>
      <p>{display}</p>
      <button onClick={() => setHide(!hide)}>{hide ? "More" : "less"}</button>
    </div>
  );
};

export default Summary;
