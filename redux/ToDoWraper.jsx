import { useState } from "react"

export function ToDoWraper() {
    const [items, setItems] = useState([]);

    const addClickHandler = (newItem) => {
        setItems([...items, newItem])
    }
    
    return (<>
        <ToDoAddForm onAddClick={addClickHandler} />
        <ToDoList items={items} />
    </>)
}