import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [col, setCol] = useState("#be2020");
  console.log(col);
  return (
    <>
      <div className="box"></div>
      <div className="box"></div>
      <input type="color" onChange={(e) => setCol(e.target.value)} />
      <div className={`h-11 w-11 bg-[${col}] shadow rounded`}></div>
    </>
  );
}

export default App;
