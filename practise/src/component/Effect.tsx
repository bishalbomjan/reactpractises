import React, { useEffect, useState } from "react";
import { string } from "zod";

const Effect = () => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching products");
    setProducts(["clothing", "Household"]);
  }, []);
  const [category, setCategory] = useState("");
  return (
    <div>
      <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="household">HouseHold</option>
      </select>
    </div>
  );
};

export default Effect;
