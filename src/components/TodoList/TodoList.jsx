import React, {useEffect, useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'


export default function TodoList({filter}) {
    const [todos, setTodo] = useState(() => readTodoFromLoaclStorage()); 

    const handleAdd = ((todo) => {setTodo([...todos, todo])});

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); // 객체를 JSON 형태로 변경해야 한다.
    }, [todos]);
    const handleUpdate = (updated) =>
    setTodo(todos.map((t) => t.id === updated.id ? updated : t));

    const handleDelete = (deleted) => setTodo(todos.filter((t) => t.id !== deleted.id))

    const filtered = getFilteredItems(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) =>
                <Todo 
                key={item.id}
                todo = {item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                />)}
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

function readTodoFromLoaclStorage(){
    const todos = localStorage.getItem('todos');
    return todos? JSON.parse(todos) : [];
}