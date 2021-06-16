import { forwardRef, useImperativeHandle, useRef } from "react";

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} {...props} />;
}

export const FancyInputWithRef = forwardRef(FancyInput);



















import { useEffect, useRef } from "react"

export function FancyForm() {
    const fancyRef = useRef();

    useEffect(() => {
        fancyRef.current.focus();
    }, [])

    return (<FancyInputWithRef ref={fancyRef} />)
}


