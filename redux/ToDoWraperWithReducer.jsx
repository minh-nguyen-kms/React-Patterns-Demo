import { useToDoReducer } from "./todoReducer";

export function ToDoWraperWithReducer() {
    const [{ items }, { addItem }] = useToDoReducer();
    return (<>
        <ToDoAddForm onAddClick={addItem} />
        <ToDoList items={items} />
    </>)
}