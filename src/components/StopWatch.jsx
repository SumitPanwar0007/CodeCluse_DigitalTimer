import React,{useState, useEffect} from 'react'

const StopWatch = () => {
    const [hour,setHour]=useState(0);
    const [min,setMin]=useState(0);
    const [sec,setSec]=useState(0);
    const [miliSec,setMiliSec]=useState(0);
    const [stop,SetStop]=useState(true);

    const onStart=()=>{
        SetStop(false);
        // setMiliSec(miliSec+1);
    }


    const onStop=()=>{
        SetStop(true);
    }
    const onReset=()=>{
        setHour(0);
        setMin(0);
        setSec(0);
        setMiliSec(0);
    }
    useEffect(()=>{
            let interval=null;
            if(!stop){
                interval=setInterval(()=>{
                    if(min>59){
                        setHour(hour+1);
                        setMin(0);
                        clearInterval(interval);
                    }
                    if(sec>59){
                        setMin(min+1);
                        setSec(0);
                        clearInterval(interval);
                    } 
                     if(miliSec>999){
                        setSec(sec+1);
                        setMiliSec(0);
                        clearInterval(interval);
                    }
                    if(  miliSec<=999){
                        setMiliSec(miliSec+1);
                    }
                },1)
            }
        else {
            clearInterval(interval);
        } 
        return ()=>{
            clearInterval(interval);
        }
    })

  return (
    <div className="flex flex-col bg-gradient-to-br from-purple-700 to-red-600 p-4  w-full h-full rounded-3xl shadow-2xl">
        <h1 className="text-4xl text-black font-semibold font-mono  align-top ">StopWatch</h1>
      <h1 className=" text-3xl md:text-6xl md:h-2/3 h-auto text-gray-800 py-6 font-bold"> {hour } : {min } : {sec} : {miliSec}</h1>
      {/* <h1 className="text-2xl text-white text-center  font-bold">hour : min :    sec :   ms</h1> */}

     <div className="py-2">
     <button className="bg-green-600  cursor-pointer p-4 m-2 font-mono  font-semibold text-xl rounded-xl w-auto min-h-fit" onClick={onStart}>Start</button>
      <button className="bg-green-600  cursor-pointer  p-4 mx-2 font-mono   font-semibold text-xl rounded-xl w-auto min-h-fit" onClick={onStop}>Stop</button>
      <button className="bg-green-600  cursor-pointer  p-4 mx-2 font-mono  font-semibold text-xl rounded-xl w-auto  min-h-fit" onClick={onReset} >Reset</button>
     </div>
    </div>
  )
}

export default StopWatch;
