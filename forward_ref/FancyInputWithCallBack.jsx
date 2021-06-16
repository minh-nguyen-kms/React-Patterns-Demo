import { useRef } from "react";

function FancyInput({ onRef, ...props }) {
  const inputRef = useRef();

  useEffect(() => {
    const ref = {
      focus: () => {
        inputRef.current.focus();
      }
    };
    onRef(ref);
  }, [inputRef]);

  return <input ref={inputRef} {...props} />;
}















export default function App() {
  let fancyRef;
  const onRef = ref => (fancyRef = ref);

  useEffect(() => {
    fancyRef.focus();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <FancyInput onRef={onRef} />
    </div>
  );
}

