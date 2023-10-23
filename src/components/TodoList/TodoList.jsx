import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'


export default function TodoList({filter}) {
    const [todos, setTodo] = useState([
        {id : '1' , text : "react 공부하기", status : 'active'},
        {id : '2' , text : "todoList 채우가", status : 'active'},
        {id : '3' , text : "component 확인", status : 'active'}
    ]) 

    const handleAdd = ((todo) => setTodo([...todos, todo]));
    const handleUpdate = (updated) =>
    setTodo(todos.map((t) => t.id === updated.id ? updated : t));

    const handleDelete = (deleted) => setTodo(todos.filter((t) => t.id !== deleted.id))

    const filtered = getFilteredItems(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) =>
                <Todo key={item.id}
                todo = {item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}>
                </Todo>)}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function getFilteredItems(todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter(todo => todo.status === filter);
}