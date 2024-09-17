import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Notes from './components/Notes'

function App() {
  const [notes , setNotes] = useState([
    {
      id:1,
      text: "check the description for the frontend prep course"
    },
    {
      id:2,
      text: "like the channel"
    }
  ])

  return (
    <div>
      <Notes notes={notes}  setNotes={setNotes}/>
    </div>
  )
}

export default App
