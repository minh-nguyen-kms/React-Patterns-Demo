export function ToDoList({items}) {
    return (<ul>
        {items.map((it) => (<li>{it}</li>))}
    </ul>)
}