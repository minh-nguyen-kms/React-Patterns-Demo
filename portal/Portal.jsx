export const Portal = ({ children }) => {
    const containerElement = document.createElement('div');
    const [container] = React.useState(containerElement);
  
    React.useEffect(() => {
      document.body.appendChild(container)
      return () => {
        document.body.removeChild(container);
      }
    }, []);
  
    return ReactDOM.createPortal(children, container);
  }