import { useState } from 'react'
import { Button } from './components/btn.jsx'
import { Counter } from './components/counter.jsx'
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  let incNum = () => {
      if (true) {
          setNum(Number(num) + 1)
      }
  };
  
  let decNum = () => {
      if (num>0) {
          setNum(Number(num) - 1)
      }
  };

  let handleChange = (e) => {
      setNum(e.target.value)
  }

  return (
    <>
      <Button onclick={decNum} text="-"></Button>
      <Counter num={num} handler={handleChange}></Counter>
      <Button onclick={incNum} text="+"></Button>
    </>
  )
}

export default App
