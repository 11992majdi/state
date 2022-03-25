import { useState } from "react";
import "./App.css";
import FullName from './components/FullName';

function App() {
  const [show,setshow]=useState(false);
  return (
    <div className="App">
    <button onClick={()=> setshow(!show)}>show </button>
      {show && <FullName/>}
      
    </div>
  );
}

export default App;
