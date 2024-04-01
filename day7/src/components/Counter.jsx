import { useState } from "react";

const Counter = () => {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [logs, setLogs] = useState([]);

  const onCLickDiv = () => {
    if (j !== 0) {
      setI(i / j);
      setLogs([...logs, `${i} / ${j} = ${i / j}`]);
    } else alert("0이 아닌 수를 넣으세요");
  };
  const onClickAdd = () => {
    setI(i + j);
    setLogs([...logs, `${i} + ${j} = ${i + j}`]);
  };
  const onClickSub = () => {
    setI(i - j);
    setLogs([...logs, `${i} - ${j} = ${i - j}`]);
  };
  const onClickTime = () => {
    setI(i * j);
    setLogs([...logs, `${i} * ${j} = ${i * j}`]);
  };

  console.log(logs);
  return (
    <div>
      <h1>{i}</h1>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickSub}>-</button>
      <button onClick={onClickTime}>*</button>
      {j != 0 ? <button onClick={onCLickDiv}>/</button> : null}
      {logs.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
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
