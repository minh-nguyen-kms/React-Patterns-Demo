export const withSideNavData = (WrappedComponent, apiSource) => ({ ...props }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      data = await fetch(apiSource);
      setItems(data);
    };
    loadData();
  }, []);

  return (<WrappedComponent items={items} {...props} />);
}