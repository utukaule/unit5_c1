
import './App.css';
import React from 'react';
function App() {
  const [runes, runCounter] = React.useState(0);
  const addRuns = (value)=>{
    runCounter(runes + value);
    if(runes === 100){
    }
  }

  const [wicket, wCounter] = React.useState(0);
  const addWickets = (w) => {
    wCounter(wicket + w );
  }

  // const [counter,oCounter] = React.useState(0);
 

  // const [ball, bCounter] = React.useState(0);
  // const incrementBall = (b,c) =>{
  //   bCounter(ball + b);
  //   if(ball === 6){
  //     ball = 0;
      
      
  //   }
  // }


  return (
    <div className="App">
      <h1>INDIA</h1>
      <h4>Score {runes}</h4>
      <button className='addRun' onClick={()=>addRuns(1)}>add 1</button>
      <button className='addRun' onClick={()=>addRuns(4)}>add 4</button>
      <button className='addRun' onClick={()=>addRuns(6)}>add 6</button>

      <h4>Wicket {wicket}</h4>
      <button className='addRun' onClick={()=>addWickets(1)}>add 1</button>


      {/* <h4>Overs {}.{}</h4>
      <button className='addRun' onClick={()=>incrementBall(1)}>add 1</button> */}
      <h1>{runes > 100 ? "India win " : ""} the match</h1>
    </div>
  );
}

export default App;
