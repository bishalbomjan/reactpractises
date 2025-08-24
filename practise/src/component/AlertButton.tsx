import React, { ReactNode } from "react";
interface Props {
  onClickButton: () => void;
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
}
const AlertButton = ({ onClickButton, color, children }: Props) => {
  return (
    <>
      <button onClick={onClickButton} className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default AlertButton;
