import { useState, useEffect } from 'react';

export  function SideNav() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      data = await fetch('PATH TO THE API');
        setItems(data);
    };
    loadData();
  }, []);

  return (<ul>
    {items.map((it) => <li>{it}</li>)}
  </ul>);
}