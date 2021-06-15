import { SideNav } from './SideNav';
import { withSideNavData } from './withSideNavData';

const SideNavWithData = withSideNavData(SideNav, 'PATH TO THE REPORT API');

export function ReportSideNav() {
  const itemClickHandler = useCallback(() => {
    // DO SOME THING WITH REPORT ITEM
  }, [])

  return (<SideNavWithData onItemClick={itemClickHandler} />);
}