import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
interface Props {
  onClickLike: () => void;
}
const Like = ({ onClickLike }: Props) => {
  const [like, setLike] = useState(false);
  const toggle = () => {
    setLike(!like);
    onClickLike();
  };
  return (
    <>
      {like ? (
        <AiFillLike size={30} fill="blue" onClick={toggle} />
      ) : (
        <AiOutlineLike size={30} onClick={toggle} />
      )}
    </>
  );
};
export default Like;
