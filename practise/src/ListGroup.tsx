import { MouseEvent, useState } from "react";
interface Props {
  cities: string[];
  heading: string;
  onSelect: (city: string) => void;
}
const ListGroup = ({ cities, heading, onSelect }: Props) => {
  //   cities.length = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No items to display.</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelect(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
