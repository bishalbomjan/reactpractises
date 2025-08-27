import React, { useEffect, useState } from "react";
import { string } from "zod";

const Effect = () => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching products");
    setProducts(["clothing", "Household"]);
  }, []);
  return <div></div>;
};

export default Effect;
