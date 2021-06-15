import { useState, useEffect, useCallback } from 'react';
import { FieldSideNavItem } from './FieldSideNavItem';

const itemRenderer = (item, onItemClick) => (
  <FieldSideNavItem item={item} onItemClick={onItemClick} />
);

export function FieldSideNav() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      data = await fetch('PATH TO THE FIELD API');
      setItems(data);
    };
    loadData();
  }, []);

  const itemClickHandler = useCallback(() => {
    // DO SOME THING WITH FIELD ITEM
  }, [])

  return (<SideNav
    items={items}
    onItemClick={itemClickHandler}
    itemRenderer={itemRenderer}
  />);
}