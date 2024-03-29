import { useState } from "react";

const Person = ({ age }) => {
  const [name, setName] = useState(`송희`);
  console.log("Person");

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />

      <p>이름 : {name}</p>
      <p>나이 : {age} </p>
    </>
  );
};

export default Person;
