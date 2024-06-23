import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

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
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>
          Changed:
          React logo in App.css spinning counterclockwise
        </p>
      </div>
      <p className="read-the-docs">
        One small step for mans
      </p>
    </>
  )
}

export default App
