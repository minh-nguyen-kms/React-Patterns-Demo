import { useMemo } from 'react';

const defaultItemRenderer = (item, onItemClick) => <li onClick={onItemClick}>{item}</li>

export function SideNav({ items, onItemClick, itemRenderer = defaultItemRenderer }) {
  return (<ul>
    {items.map((it) => renderItem(it, onItemClick))}
  </ul>);
}