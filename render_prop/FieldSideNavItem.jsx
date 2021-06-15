export function FieldSideNavItem({ item, onItemClick }) {
  const hasStar = checkItemHasStart(item) // check if item has star
  
  return (<li onClick={onItemClick}>{item} {hasStar && <Star />}</li>)
}