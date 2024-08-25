import './App.css'
import { Contact } from './components/Cont.jsx';
import { Header } from "./components/Head.jsx";
import { Objective } from "./components/Objectives/Obj.jsx";
import { Major } from "./components/Form/Form.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <hr />
        <Contact/>
        <hr />
        <Objective/>
        <Major/>
      </header>  
    </div>
  )
}

export default App
