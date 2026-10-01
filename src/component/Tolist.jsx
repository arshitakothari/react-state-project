import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function Tolist() {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    

    const addTask = () => {
       if (input!== '') {
            setList([...list, input])
            setInput('')
        }
    }

    const deletelist = (index)=>{
        setList(list.filter((item, i) => i !== index))
        
    }
    
    return (
        <div className='todo-container'>
            <div className='todo-card'>
                <h1>To-Do List</h1>
                <h2>Task 9</h2>

                <div className='todo-input-group'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Enter a task'
                        className='todo-input'
                    />
                    <button className='todo-add-btn' onClick={addTask}>
                        Add Task
                    </button>
                </div>

                <ul className='todo-list'>
                    {list.map((item, index) => (
                        <li key={index} className='todo-item'>
                            <span className='todo-text'>{item}</span>
                            <button className='delete-btn' onClick={() =>deletelist(index)} >
                                <FaTrashAlt />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tolist
