import './App.css'

function sayHi() {
  alert("こんにちは、苦い")
}

function App() {
  return (
    <>
      <button onClick={sayHi}>Click Here</button>
    </>
  )
}

export default App
