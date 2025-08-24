import React, { useState } from "react";

const Message = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);
  const handleClick = (id: number) => {
    setBugs(bugs.map((bug) => (bug.id === id ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      {bugs.map((bug, index) => (
        <p key={index}>
          {bug.title} {bug.fixed ? "Fixed" : "Unfixed"}
          <button onClick={() => handleClick(bug.id)}>Click</button>
        </p>
      ))}
    </div>
  );
};

export default Message;
