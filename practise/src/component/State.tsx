import React, { useState } from "react";

const state = () => {
  const [person, setPerson] = useState({
    firstName: "bishal",
    lastName: "Bomjan",
    contact: {
      address: {
        street: "",
      },
    },
  });

  return <div></div>;
};

export default state;
