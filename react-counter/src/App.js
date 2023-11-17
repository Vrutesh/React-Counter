import { useState } from 'react';
import './App.css';

function App() {


let [counterValue, setCounter] = useState(0)


 const addValue = () => {
   let result = counterValue+=1
   setCounter(result)
 }

 const removeValue = () => {
   if(counterValue <= 0){
     counterValue = 0
    }
    else{
    let result = counterValue-=1
    setCounter(result)
  }
 }

  return (
    <>
    <div className="container">
          <h1>COUNTER</h1>
          <h2 className='counter-display'><span>{counterValue}</span></h2>
          <div className="btn">

          <button onClick={addValue}>+</button>
          <button onClick={removeValue}>-</button>

          </div>
    </div>

    </>
  );
}

export default App;
