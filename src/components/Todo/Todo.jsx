import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'
import styles from './Todo.module.css'

export default function Todo({todo, onUpdate, onDelete}) {
    console.log("Todo 전체 조회 >>", todo)
    const {text, status} = todo;

    const handleChange = (e) => {
        const check = e.target.checked? 'completed' : 'active'
        onUpdate({...todo, status : check})
    }

    const handleDelete = () => {
        console.log("todo >>>", todo)
        onDelete(todo)
    }

    return (
        <li className={styles.todo}>
           <input className={styles.checkbox}
           type="checkbox" id='checkbox'
           checked={status === 'completed'}
           onChange={handleChange}
           />
           <label htmlFor='checkbox' className={styles.text} >{text}</label>
           <span className={styles.icon}>
           <button className={styles.button} onClick={handleDelete}>
            <FaTrashAlt></FaTrashAlt>
            </button>
            </span>
        </li>
    );
}

