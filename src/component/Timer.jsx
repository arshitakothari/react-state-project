import React, {useState} from 'react'


function Timer() {
    const [time,settime]=useState(0);
    var ms=0,sec=0,min=0,hr=0,c;

    const start =()=>{
      c=setInterval(()=>{
        ms++;
        if(ms===100){
          sec++;
          ms=0
        }
        if(sec===60){
          min++;
          sec=0;
        }
        if(sec===60){
          hr++;
          min=0;
        }
        display();
      },10)
    }
    const stop =()=>{
      clearInterval(c);
    } 
    const reset =()=>{
      clearInterval(c);
      ms=0; sec=0; min=0; hr=0;
      display();
    } 
    const display =()=>{
      
      document.getElementById('dis').innerHTML=hr+":"+min+":"+sec+":"+ms;
    }   
    
  return (
    <div className="timer-container">
        <div className="timer-card">
            <h1>Task 4</h1>
            <h2>Stop Watch</h2>
            <div className="timer-display" id='dis'>0:0:0:0</div>
            <div className="timer-buttons">
                <button className="timer-btn start" onClick={start}>Start</button>
                <button className="timer-btn stop" onClick={stop}>Stop</button>
                <button className="timer-btn reset" onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Timer
