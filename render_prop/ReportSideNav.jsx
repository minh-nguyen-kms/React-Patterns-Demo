import { useState, useEffect, useCallback } from 'react';

export function ReportSideNav() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      data = await fetch('PATH TO THE REPORT API');
      setItems(data);
    };
    loadData();
  }, []);

  const itemClickHandler = useCallback(() => {
    // DO SOME THING WITH REPORT ITEM
  }, [])

  return (<SideNav items={items} onItemClick={itemClickHandler} />);
}