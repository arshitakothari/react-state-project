import React, {useState} from 'react'


function Cal3() {
    const [num1, setnum1]=useState(0);
        const [num2, setnum2]=useState(0);
        const [result, setresult]=useState(0);
  return (
    <div className="cal3-container">
      <div className="cal3-header">
        <h1>Task 3</h1>
        <h2>Advanced Calculator</h2>
      </div>

      <div className="calculator-wrapper">
        <div className="input-section">
          <div className="input-field">
            <label>Number 1</label>
            <input type="text" onChange={(e)=>{setnum1(Number(e.target.value))}} />
          </div>
          <div className="input-field">
            <label>Number 2</label>
            <input type="text" onChange={(e)=>{setnum2(Number(e.target.value))}} />
          </div>
        </div>

        <div className="button-section">
          <button className="btn-add" onClick={()=>{setresult(num1+num2)}}>+</button>
          <button className="btn-subtract" onClick={()=>{setresult(num1-num2)}}>−</button>
          <button className="btn-multiply" onClick={()=>{setresult(num1*num2)}}>×</button>
          <button className="btn-divide" onClick={()=>{setresult(num1/num2)}}>÷</button>
        </div>

        <div className="result-section">
          <label>Result</label>
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default Cal3
