import React, { useState } from 'react'


function Cal1() {
    const [no,setno]=useState(0);

    return (
        <div className="cal1-container">
            <div className='cal1-box'>
            <h1>Task 1</h1> 
            <h2>Counter</h2>

                <div className="calculator">
                    <h1 >{no}</h1>
                    <button onClick={()=>{setno(no+1)}}>+</button>
                    <button onClick={()=>{setno(no+1)}}>-</button>
                </div>
            </div>
        </div>
        
    )
}

export default Cal1