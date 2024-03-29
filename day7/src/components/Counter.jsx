import { useState } from "react";

const Counter = () => {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const onCLickDiv = () => {
    if (j !== 0) setI(i / j);
    else alert("0이 아닌 수를 넣으세요");
  };
  console.log(j);
  return (
    <div>
      <h1>{i}</h1>
      <button onClick={() => setI(i + j)}>+</button>
      <button onClick={() => setI(i - j)}>-</button>
      <button onClick={() => setI(i * j)}>*</button>
      {j != 0 ? <button onClick={onCLickDiv}>/</button> : null}
      <br></br>
      <input
        type="number"
        onChange={(e) => {
          setJ(Number(e.target.value));
        }}
        value={j}
      ></input>
      <button onClick={() => setI(i + 1)}>up</button>
      <button onClick={() => console.log(i)}>check</button>
    </div>
  );
};
export default Counter;
