import { useState } from "react";
import produce from "immer"

const initialItems = [
    { id: 201, text: 'Learn React', done: false },
    { id: 202, text: 'Learn Angular', done: true },
    { id: 203, text: 'Learn Vue', done: false },
];

function Todo(props) {
    const { item, toggle } = props;
    
    return (
        <li>            
            <input
                type="checkbox"
                checked={item.done}
                onChange={toggle}
               />
            <label>{item.text}</label>
        </li>
    )
}

export default function Todos() {
    const [items, setItems] = useState(initialItems);
    const unfinishedCount = items.filter(i => !i.done).length;

    /*
    // Plain old JavaScript
    function toggle(id) {
        setItems(oldItems => (
            oldItems.map(
                item => item.id === id
                        ? { ...item, done: !item.done}
                        : item
            )
        ))
    }
    */

    function toggle(id) {
        setItems(produce((oldItems) => {
            const item = oldItems.find(i => i.id === id);
            item.done = !item.done;

            /*
            for (let i=0; i < oldItems.length; i++) {
                if (oldItems[i].id === id) {
                    oldItems[i].done = !oldItems[i].done;
                }
            }
            */
        }));
    }

    return (
        <div>
            <h1>My Todo App</h1>
            <p>You have {unfinishedCount} items left to do</p>
            <ul>
                {items.map(item => (
                    <Todo item={item} toggle={() => toggle(item.id)} />
                ))}
            </ul>
        </div>
    )
}