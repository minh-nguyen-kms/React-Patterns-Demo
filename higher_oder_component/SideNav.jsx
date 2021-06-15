export function SideNav({ items, onItemClick }) {
  return (<ul>
    {items.map((it) => <li onClick={onItemClick}>{it}</li>)}
  </ul>);
}