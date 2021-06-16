import { useState } from "react"

export function ToDoAddForm({ onAddClick }) {
    const [newItem, setNewItem] = useState('');

    const inputChangeHandler = (e) => setNewItem(e.target.value);
    const addClickHandler = () => {
        onAddClick(newItem)
    }
    return (<>
        <input onChange={inputChangeHandler} />
        <button onClick={addClickHandler}>Add Todo</button>
    </>)
}
