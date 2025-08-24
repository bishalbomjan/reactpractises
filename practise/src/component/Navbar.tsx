import React from "react";
interface Props {
  count: number;
}
const Navbar = ({ count }: Props) => {
  return <div>{count}</div>;
};

export default Navbar;
