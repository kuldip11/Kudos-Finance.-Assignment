import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react'

function App() {
  const [time, setTime] = useState("")
  const [sec, setSec] = useState(0)
  const currentTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString()
    return time;
  }
  useEffect(() => {
    if(time!==""){
      var update = setInterval(() => {
        let time = currentTime();
        setTime(time)
        var time1=Number(time.split(" ")[0].split(":")[2])
        setSec(time1)
        console.log()
        },1000)
        return () => clearInterval(update)
    }
    
  },[time])
  useEffect(() => {
    let time = currentTime();
    setTime(time)
  }, [])


  return (
    <div className={sec%2==0 ? "App dark" : "App light"}>
      <div className="display">
      <h1>Clock</h1>
        <div className="timer">
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
