import React, {useState} from 'react'

function Puzzle() {
  const [box, setBox] = useState(['1','2','3','4','5','6','7','8','']);
  const [winner, setWinner] = useState('');
  
  const newgame = () => {
    let a;
    let newBox = ['1','2','3','4','5','6','7','8',''];
    for(var i=newBox.length-1; i>0; i--){
				var j=Math.floor(Math.random()*(i+1))
				 a=newBox[i]
				newBox[i]=newBox[j]
				newBox[j]=a
			}
    setBox(newBox);
}

  const moveBox = (i) => {
    let blank = box.indexOf('');


    let r1=(Math.floor(blank/3));
    let c1=(blank%3);

    let r2=(Math.floor(i/3));
    let c2=(i%3);
    
    if((r1===r2 && Math.abs(c1-c2)===1) || (c1===c2 && Math.abs(r1-r2)===1)){
      let newBox = [...box];
      newBox[blank] = newBox[i];
      newBox[i] = '';
      setBox(newBox);
       if(newBox[0]==='1' && newBox[1]==='2' && newBox[2]==='3' && newBox[3]==='4' && newBox[4]==='5' && newBox[5]==='6' && newBox[6]==='7' && newBox[7]==='8' && newBox[8]===''){ 
        alert("you are win!");
        setWinner();
  
    }
    
  }
}
  
  return (
    <div className='puzzal'>
      <h1>Puzzle</h1>
      <h2>Task 8</h2>

      <div className='puzzle-grid'>
       <button onClick={() => moveBox(0)}>{box[0]}</button>
       <button onClick={() => moveBox(1)}>{box[1]}</button>
       <button onClick={() => moveBox(2)}>{box[2]}</button>  
        <button onClick={() => moveBox(3)}>{box[3]}</button>  
        <button onClick={() => moveBox(4)}>{box[4]}</button>  
        <button onClick={() => moveBox(5)}>{box[5]}</button>  
        <button onClick={() => moveBox(6)}>{box[6]}</button>  
        <button onClick={() => moveBox(7)}>{box[7]}</button>  
        <button onClick={() => moveBox(8)}>{box[8]}</button>
        
        {/* {box.map((item, index) => {
          return <button key={index} onClick={() => moveBox(index)}>{item}</button>
        })} */}
      </div>
    
      {/* <button onClick={reset}>Reset</button> */}
      <button onClick={newgame}>New Game</button>
      <p>{winner}</p>
    </div>
  )
}

export default Puzzle
