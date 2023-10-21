import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodo] = useState([
        {id : '1' , text : "react 공부하기", status : 'active'},
        {id : '2' , text : "todoList 채우가", status : 'active'}
    ]) 

    const handleAdd = ((todo) => setTodo([...todos, todo]))
       
    return (
        <section>
            <ul>
                {
                todos.map((todo => 
                    <li key={todo.id}>{todo.text}</li>
                    ))
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

