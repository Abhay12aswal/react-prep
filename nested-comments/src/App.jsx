import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NestedComments from './components/NestedComments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Nested comments</h1>
    <NestedComments comments={commentsData}/>
    </div>
  )
}

export default App
