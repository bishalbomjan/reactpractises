import React, { useState } from "react";

const StateMang = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);
  };
  return (
    <div>
      <button style={{ backgroundColor: "dodgerblue" }} onClick={handleClick}>
        Click ME
      </button>
    </div>
  );
};

export default StateMang;
