import React, { useState } from "react";
import { styled } from "styled-components";
import { FaGlobeAfrica } from "react-icons/fa";

interface Props {
  item: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
interface ListItemProps {
  active: boolean;
}
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

const ListGroup = ({ item, heading, onSelectItem }: Props) => {
  const [select, setSelect] = useState(-1);
  return (
    <>
      <h2>{heading}</h2>
      <FaGlobeAfrica color="blue" size="40" />
      <List>
        {item.map((item, key) => (
          <ListItem
            active={select === key}
            onClick={() => {
              setSelect(key);
              onSelectItem(item);
            }}
            key={key}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
