import { useState } from "react";

const Box = ({ width, height }) => {
  const [color, setColor] = useState("black");

  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)}></input>

      <div
        style={{
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
    </>
  );
};

export default Box;
