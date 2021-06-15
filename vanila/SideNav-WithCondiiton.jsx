import { useState, useEffect, useCallback } from 'react';

export function SideNav(isReportData) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      data = isReportData
        ? await fetch('PATH TO THE REPORT API')
        : await fetch('PATH TO THE FIELD API');
        setItems(data);
    };
    loadData();
  }, []);

  const itemClickHandler = useCallback(() => {
    if (isReportData) {
      // DO SOME THING WITH REPORT ITEM
    } else {
      // DO SOME THING WITH FIELD ITEM
    }
  }, [isReportData])

  return (<ul>
    {items.map((it) => <li onClick={itemClickHandler}>{it}</li>)}
  </ul>);
}