import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({id: uuid4, text, status : 'active'});
        setText('');
    }

    const handleText = (e) =>
    setText(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} 
            placeholder='todoList를 채우세요'
            onChange={handleText}/>
        <button>Add</button>
        </form>
    );
}

