import { useEffect, useRef } from "react";

export function FancyInput(props) {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return <input ref={inputRef} {...props} />;
}




















export function FancyForm() {
    const fancyRef = useRef();

    useEffect(() => {
        fancyRef.current.focus();
    }, [])

    return (<FancyInput ref={fancyRef} />)
}