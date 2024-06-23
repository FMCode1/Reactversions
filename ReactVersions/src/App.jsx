import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, stateCount] = useState(10)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nye V Nwe App</h1>
      <h1> {count} </h1>
      <div className="card">
        <button onClick={() => stateCount((count) => count + 5)}>
          Nye:
        </button>
        <button onClick={() => stateCount((count) => count - 50)}>
          Nwe:
        </button>
        <p>
          Changed:
          Give 5 and get 50 taken from you.
        </p>
      </div>
      <p className="read-the-docs">
        Another small step for mans
      </p>
    </>
  )
}

export default App
