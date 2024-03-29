import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";
import Persons from "./components/Persons";
import Boxes from "./components/Boxes";

// html 태그를 리턴하는 파일을 jsx

//                              csr client side render ssr server side render
// 초기 속도 (사이트 접속했을때)         압도적 느림            압도적 빠름
// 그 후부터의 속도                         빠름                  느림

function App() {
  console.log("APP");

  return (
    <div className="App">
      <Persons></Persons>
      <Boxes></Boxes>
    </div>
  );
}

export default App;
