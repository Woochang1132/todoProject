import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id : '123', text : '장보기', status : 'active'},
        {id : '124', text : '공부하기', status : 'active'}])
   
    //새로운 todo를 todos에 업데이트 해야 함
    const handleAdd = (todo) => setTodos([...todos, todo])
       

    return (
        <section>
            <ul>
                {
                    todos.map(item => <li key={item.id}>{item.text}</li>)
                }
            </ul>

            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

