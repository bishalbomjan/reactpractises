import React from "react";
interface Props {
  item: string[];
  onClear: () => void;
}
const Cart = ({ item, onClear }: Props) => {
  return (
    <div>
      <ul>
        {item.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Item</button>
    </div>
  );
};

export default Cart;
