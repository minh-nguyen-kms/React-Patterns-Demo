import { useState } from "react"

export function VanilaTodo() {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const inputChangeHandler = (e) => setNewItem(e.target.value);
    const addClickHandler = () => {
        setItems([...items, newItem])
    }
    return (<>
        <input onChange={inputChangeHandler} />
        <button onClick={addClickHandler}>Add Todo</button>
        <ul>
            {items.map((it) => (<li>{it}</li>))}
        </ul>
    </>)
}