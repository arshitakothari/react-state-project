import React, { useState } from 'react'


function Cal2() {
    const [num1, setnum1]=useState(0);
    const [num2, setnum2]=useState(0);
    const [result, setresult]=useState(0);
  return (
    <div className="cal2-container">
        <h1>Task 2</h1>
        <h2>Calculator</h2>

        <div className="calculator-form">
            <div className="input-group">
                <label>No1:</label>
                <input type="text" onChange={(e)=>{setnum1(Number(e.target.value))}} />
            </div>
            <div className="input-group">
                <label>No2:</label>
                <input type="text" onChange={(e)=>{setnum2(Number(e.target.value))}} />
            </div>
            <div className="button-container">
                <button onClick={()=>{setresult(num1+num2)}}>+</button>
            </div>
            <div className="result-container">
                <label>Result:</label>
                <p>{result}</p>
            </div>
        </div>
    </div>
  )
}

export default Cal2
