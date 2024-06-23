import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, addCount] = useState(10)
  const [sCount, subCount] = useState(10)

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
      <h1>T minus 10, 9, 8, 7...</h1>
      <div className="card">
        <button onClick={() => addCount((count) => count + 10)}>
          Click to Add 10: ({count})
        </button>
        <p>
          Changed:
          Added 2 buttons Click to add 10 or remove 5 starting from usestate 10
        </p>
        <button onClick={() => subCount((sCount) => sCount - 5)}>
          Click to subtract 5: ({sCount})
        </button>
      </div>
      <p className="read-the-docs">
        Another small step for mans
      </p>
    </>
  )
}

export default App
