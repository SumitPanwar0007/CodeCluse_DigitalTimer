import {useEffect, useState } from 'react'
import bg from './images/back.jpg'
import './App.css'
import StopWatch from './components/StopWatch';
import Timer from './components/Timer';

function App() {
  const [time, setTime] = useState({ms:0,s:0,m:0,h:0});
   
  const [showStopWatch,setShowStopWatch]=useState(true);
  const [showTimer,setShowTimer]=useState(false); 
  const handleStopWatch=()=>{
    setShowStopWatch(true);
    setShowTimer(false);
  }
  const handleShowTimer = () => {
    setShowStopWatch(false);
    setShowTimer(true);
  };
  return (
    <>
   <div className="main-section h-screen m-0 p-14 border-2 flex flex-col sm:flex-row justify-center items-center after:"
   style={{backgroundImage:`url(${bg})`}}
   >
  
      <div className="  content-center  sm:w-2/3 md:w-1/2 items-center  w-auto h-auto  my-auto sm:h-80 rounded-3xl">
       {showStopWatch &&  <StopWatch />}
       {showTimer &&  <Timer />}
      </div>
    <div className="my-4 ">
    <button  className="bg-green-600  cursor-pointer my-2 p-4 mx-2 font-mono  font-semibold text-xl rounded-xl w-auto  min-h-fit" onClick={handleStopWatch}>Stopwatch</button>
    <button  className="bg-green-600  cursor-pointer my-2 p-4 mx-2 font-mono  font-semibold text-xl rounded-xl w-auto  min-h-fit" onClick={handleShowTimer}>Timer</button>

    </div>
   </div>
    </>
  )
}

export default App
