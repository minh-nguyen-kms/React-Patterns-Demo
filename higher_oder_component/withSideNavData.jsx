export const withSideNavData = (WrappedComponent, sourceType) => ({ ...props }) => {
  const apiSource = getAPISource(sourceType);
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