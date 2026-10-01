
import React, {useState} from 'react'


function Tictec() {
  const [b1, setB1] = useState('');
  const [b2, setB2] = useState('');
  const [b3, setB3] = useState('');
  const [b4, setB4] = useState('');   
  const [b5, setB5] = useState('');
  const [b6, setB6] = useState('');
  const [b7, setB7] = useState(''); 
  const [b8, setB8] = useState('');
  const [b9, setB9] = useState('');
  const [turn, setTurn] = useState('X');
  

  
  const cliked = (value, setValue) => {
    if(value === ''){
      setValue(turn);
      winner(
        setValue === setB1 ? turn : b1,
        setValue === setB2 ? turn : b2,
        setValue === setB3 ? turn : b3,   
        setValue === setB4 ? turn : b4,
        setValue === setB5 ? turn : b5,
        setValue === setB6 ? turn : b6,
        setValue === setB7 ? turn : b7,
        setValue === setB8 ? turn : b8,
        setValue === setB9 ? turn : b9,
      );
      if(turn === 'X'){
        setTurn('O');
      }
      else{
        setTurn('X');
      }
      
    } 
  }
  const winner = (b1, b2, b3, b4, b5, b6, b7, b8, b9) => {
    // alert("Checking Winner")    
    
    if(b1!=="" && b1===b2 && b2===b3){
      alert(b1+"wins!")
      // disable();
    }
    else if(b4!=="" && b4===b5 && b5===b6){
      alert(b4+"wins!");
      // disable();  
    } 
    else if(b7!=="" && b7===b8 && b8===b9){
      alert(b7+"wins!");
      // disable();
    }
    else if(b1!=="" && b1===b4 && b4===b7){
      alert(b1+"wins!");
      // disable();
    }
    else if(b2!=="" && b2===b5 && b5===b8){
      alert(b2+"wins!");  
      // disable();
    } 
    else if(b3!=="" && b3===b6 && b6===b9){
      alert(b3+"wins!");
      // disable();
    }
    else if(b1!=="" && b1===b5 && b5===b9){
      alert(b1+"wins!");
      // disable();
    }
    else if(b3!=="" && b3===b5 && b5===b7){
      alert(b3+"wins!");  
      // disable();
    }
    
  }
  // const disable = () => {
  //   if(b1!=='' && b2!=='' && b3!=='' && b4!=='' && b5!=='' && b6!=='' && b7!=='' && b8!=='' && b9!==''){
 
  //   }
  // }
  const reset = () => {
    setB1('');
    setB2('');  
    setB3('');
    setB4('');
    setB5('');
    setB6('');
    setB7('');
    setB8('');  
    setB9('');
    // setTurn('x');
    
  }
  
  return (
    <div className='tictac'>
      <h1>Tic Tac Toe</h1>
      <h2>Task 7</h2>
      <div>
        
        <button onClick={()=>cliked(b1, setB1)}>{b1}</button>
        <button onClick={()=>cliked(b2, setB2)}>{b2}</button>
        <button onClick={()=>cliked(b3, setB3)}>{b3}</button>
        <button onClick={()=>cliked(b4, setB4)}>{b4}</button>
        <button onClick={()=>cliked(b5, setB5)}>{b5}</button>
        <button onClick={()=>cliked(b6, setB6)}>{b6}</button>
        <button onClick={()=>cliked(b7, setB7)}>{b7}</button>
        <button onClick={()=>cliked(b8, setB8)}>{b8}</button>
        <button onClick={()=>cliked(b9, setB9)}>{b9}</button>

        {/* <button onClick={winner}>Check Winner</button> */}
        <button onClick={reset}>Reset</button>
    
      </div>
    </div>
  )
}

export default Tictec
