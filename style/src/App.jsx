import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { css } from "@emotion/css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="box"></div>
      <div className="box"></div>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      {/*css in js */}
      <div
        className={css`
          width: 100px;
          height: 100px;
          background-color: ${color};
          &:hover {
            background-color: blue;
            transition: all 2s;
            transform: rotate(900deg) scale(2);
          }
        `}
      ></div>
    </>
  );
}

export default App;
