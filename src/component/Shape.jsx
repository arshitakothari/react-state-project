import React from 'react'

function Shape() {
    const [shape, setshape] = React.useState("circle");
    
    const allshape = () => {
        switch(shape) {
            case "circle":
                return <div className="visual-circle"></div>;
            case "square":
                return <div className="visual-square"></div>;
            case "rectangle":
                return <div className="visual-rectangle"></div>;
            case "triangle":
                return <div className="visual-triangle"></div>;
            default:
                return <div className="visual-circle"></div>;
        }
    };
    
  return (
    <div className="shape-container">
      <div className="shape-header">
        <h1>Task 5</h1>
        <h2>Shape Changer</h2>
      </div>
      <div className="shape-content">
        <div className="shape-buttons">
          <button className='btn-circle' onClick={()=>setshape("circle")}>Circle</button>
          <button className='btn-square' onClick={()=>setshape("square")}>Square</button>
          <button className='btn-rectangle' onClick={()=>setshape("rectangle")}>Rectangle</button>
          <button className='btn-triangle' onClick={()=>setshape("triangle")}>Triangle</button>
        </div>
        <div className="shape-display">
          {allshape()}
        </div>
      </div>
    </div>
  )
}

export default Shape
