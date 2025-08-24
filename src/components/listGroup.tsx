import { useState } from 'react';
import styles from './listGroup.module.css';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

// object with two property items : array and string
// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  //  a function that takes a parameter of item string onSelectItem. (item: string) => void;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}>
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
