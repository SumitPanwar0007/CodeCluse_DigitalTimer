import React,{useState,useEffect,ChangeEvent} from 'react'

const Timer = () => {
    
    const [deadline,setDeadline]=useState("")
    const [day,setDay]=useState(0);
    
    const [hour,setHour]=useState(0);
    const [min,setMin]=useState(0);
    const [sec,setSec]=useState(0);

    const [inputText, setInputText] = useState("");
   
   
    // console.log(inputText)
    const getTime=()=>{
        if (Date.parse(deadline)) {
            const time = Date.parse(deadline) - Date.now();
            setDay(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHour(Math.floor(time / (1000 * 60 * 60) % 24));
            setMin(Math.floor(time / (1000 * 60) % 60));
            setSec(Math.floor(time / 1000 % 60));
          }

    }
    useEffect(()=>{
            const interval=setInterval(()=>getTime(),1000)
            return()=> clearInterval(interval)
    },[deadline])
    const handleChange = (e) => {
   
        setInputText(e.target.value);
      };
      const handleEnterDate = () => {
        if(inputText){
            
            setDeadline(inputText);
            // console.log(deadline);
        }    
      };
    
            console.log(deadline);

  return (
    <>
         <div className="flex flex-col justify-center  bg-gradient-to-br from-purple-700 to-red-600 p-4 mx-auto  w-full h-auto rounded-3xl shadow-2xl">
        <h1 className="text-4xl text-black font-semibold font-mono py-4 align-top ">CounDown Timer</h1>

      <input type="text" onChange={handleChange} value={inputText} placeholder='Month Day Year'className="p-2 text-xl font-semibold bg-inherit border-2 border-gray-500 rounded-xl" />
 <button  className="bg-green-600  cursor-pointer  p-2 relative my-6 font-mono  font-semibold text-2xl rounded-xl w-1/2 mx-auto  min-h-fit" 
                    onClick={handleEnterDate}> Enter Date</button>
   
 { deadline ? (


    <div className="container font-bold sm:text-2xl md:text-3xl lg:text-4xl content-center py-4   text-white">

        <div className="flex justify-between">
            <div className="px-4">
                <h1>{day<10 ? "0"+day:day}</h1>
                <span className="text">Days</span>
            </div>
            <div className="px-4">
                <h1>{hour<10 ? "0"+hour:hour}</h1>
                <span className="text">Hour</span>
            </div> 
            <div className="px-4">
                <h1>{min<10 ? "0"+min:min}</h1>
                <span className="text">Min</span>
            </div>
            <div className="px-4">
                <h1>{sec<10 ? "0"+sec:sec}</h1>
                <span className="text">Secs</span>
            </div> 
           
        </div>
    </div>
     ) :(
        <div className=" font-semibold text-3xl">Not Deadline</div>
     )
}
</div>
    </>
  )
}

export default Timer;
