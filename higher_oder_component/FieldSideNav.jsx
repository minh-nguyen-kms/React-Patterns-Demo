import { SideNav } from './SideNav';
import { withSideNavData } from './withSideNavData';

const SideNavWithData = withSideNavData(SideNav, 'PATH TO THE FIELD API');

export function FieldSideNav() {
  const itemClickHandler = useCallback(() => {
    // DO SOME THING WITH FIELD ITEM
  }, [])

  return (<SideNavWithData onItemClick={itemClickHandler} />);
}