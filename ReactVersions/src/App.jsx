import { useState } from 'react'
import './App.css'

function App() {
  const [avg, setAvg] = useState(80);
  const [performance, setPerformance] = useState('good');

  const IncreasePerformance = () => {
    // increase the average by 1
    const newAvg = avg + 1;

    if (newAvg == 101) return;

    if (newAvg >= 90) {
      setPerformance("great");
    } else if (newAvg >= 70 && newAvg < 90) {
      setPerformance('good'); // 70 - 89 is light green
    } else if (newAvg < 70 && newAvg >= 60) {
      setPerformance("okay"); // 60 - 69 is yellow
    } else if (newAvg < 60 && newAvg >= 50) {
      setPerformance("medium ");
    } else {
      setPerformance("bad");
    }
    setAvg(newAvg);
  }

  const ReducePerformance = () => {
    // reduce the average by 1
    const newAvg = avg - 1;

    if (newAvg == -1) return; // if the average is 0, do not reduce it further 

    if (newAvg >= 90) {
      setPerformance("great");
    } else if (newAvg >= 70 && newAvg < 90) {
      setPerformance('good'); // 70 - 89 is light green
    } else if (newAvg < 70 && newAvg >= 60) {
      setPerformance("okay"); // 60 - 69 is yellow
    } else if (newAvg < 60 && newAvg >= 50) {
      setPerformance("medium ");
    } else {
      setPerformance("bad");
    }
      setAvg(newAvg);
  }

  return (
    <>
    <h1>GPA Performance Indicator</h1>
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${performance}`}> 
          <h2>{avg}%</h2>
        </div>
      </div>
      <div className='button-container'>
        <button onClick={() => IncreasePerformance()}>+</button>
        <button onClick={() => ReducePerformance()}>-</button>
      </div>
    </div>
    </>
  )
}
export default App
