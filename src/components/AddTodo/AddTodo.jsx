import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length === 0){
            return;
        }

        // 전달받은 pros 함수를 활용해서 component를 사용하는 곳
        // 변수 업데이트 가능
        onAdd({id: uuid4, text, status : 'active'});
        setText('');
    }

    const handleText = (e) =>
    setText(e.target.value);

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} 
            type="text" value={text} 
            placeholder='todoList를 채우세요'
            onChange={handleText}/>
        <button className={styles.button}>Add</button>
        </form>
    );
}

