import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [value, setvalue] = useState(0);
  const [success ,setsuccess]= useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setvalue((val) => val +1);
    },100)
  }, []);

  return (
    <div className='app'>
    <span> Progress bar</span>
    <ProgressBar 
    value={value}
    onComplete = {()=>{
      setsuccess(true)
    }}
    />
    <span>{success ? "complete!" : "Loading..."}</span>
    </div>
  )
}

export default App
