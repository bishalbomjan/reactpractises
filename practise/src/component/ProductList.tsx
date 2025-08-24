import React, { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);
  function connect() {
    console.log("Connecting.");
  }
  function disconnect() {
    console.log("Disconnecting.");
  }
  useEffect(() => {
    connect();
    //To provide clean up code, here we return a function
    return () => disconnect();
  }, []);
  return <div>{category}</div>;
};

export default ProductList;
