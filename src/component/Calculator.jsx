import React, { useState } from 'react'


function Calculator() {

  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');
  const total = (e) => {
    setNum1(result);
    setResult(0);
    setOperator(e);
  }

  
  const ans = () => {
    const num2 = result; 
    
      if(operator === '+'){
          setResult(String(Number(num1) + Number(num2)));
        }
        else if(operator === '-'){
          setResult(String(Number(num1) - Number(num2)));

      }
      else if(operator === '*'){
          setResult(String(Number(num1) * Number(num2)));  
      }
      else if(operator === '/'){
          setResult(String(Number(num1) / Number(num2)));
      }
      console.log(num1, num2, operator);
  }

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h1>Task 6</h1>
        <h2>Calculator</h2>
      </div>

      <div className="calculator-display">
        <p>{result}</p>
      </div>

    <p>{operator}</p>
      <div className="calculator-buttons">
        <button className="btn-clear" onClick={() => { setResult(0); }}>CE</button>
        <button className="btn-clear" onClick={() => { setResult(0); }}>C</button>
        <button className="btn-percent" onClick={()=>{
          if(result.length >1){
            setResult(result.substring(0, result.length - 1))
          }
          else{            
            setResult(0)
          }
        }}>«</button>
        <button className="btn-operator" onClick={()=>{total('/')}}>/</button>

        <button className="btn-number" onClick={() => { 
          
          if(result === 0){
            setResult('7')      
          }
          else{           
             setResult(result + '7')    
          }
        }}>7</button>
        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('8')      
          }
          else{
             setResult(result + '8')    
          }
          }}>8</button>
        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('9')
          }
          else{
             setResult(result + '9')    
          }

         }}>9</button>
        <button className="btn-operator" onClick={()=>{total('*')}}>*</button>

        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('4')
          }
          else{
             setResult(result + '4')    
          }
         }}>4</button>
        <button className="btn-number" onClick={() => {
          if(result === 0){
            setResult('5')
          }
          else{
             setResult(result + '5')    
          }
         }}>5</button>
        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('6')
          }
          else{
             setResult(result + '6')    
          }
         }}>6</button>
        <button className="btn-operator" onClick={()=>{total('-')}}>-</button>

        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('1')
          }
          else{
             setResult(result + '1')    
          }
         }}>1</button>
        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('2')
          }
          else{
             setResult(result + '2')    
          }
         }}>2</button>
        <button className="btn-number" onClick={() => { 
          if(result === 0){
            setResult('3')
          }
          else{
             setResult(result + '3')    
          }
         }}>3</button>
        <button className="btn-operator" onClick={()=>{total('+')}}>+</button>

        <button className="btn-number btn-zero" onClick={() => { setResult(result + '0') }}>0</button>
        <button className="btn-number" onClick={() => { 
          if(!result.includes('.')){
            setResult(result + '.')
          }
           }}>.</button>
        <button className="btn-equals" onClick={ans}>=</button>
      </div>
    </div>
  )
}

export default Calculator
