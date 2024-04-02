import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const lckList = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    rate: 0.0,
    kda: 0.0,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    rate: 0.0,
    kda: 0.0,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,
    rate: 0.0,
    kda: 0.0,
    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    rate: 0.0,
    kda: 0.0,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,
    rate: 0.0,
    kda: 0.0,
    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    rate: 0.0,
    kda: 0.0,
    kill: 377,
    death: 630,
    assist: 858,
  },
];
const keys = [...Object.keys(lckList[0])];
function App() {
  console.log(keys);
  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("rank");

  const [tmp, setTmp] = useState([...lckList]);
  const onClickSearch = () => {
    const te = lckList
      .filter((el) => el[searchKey].toString().includes(search))
      .sort((a, b) =>
        searchKey === "rank" ? a.rank - b.rank : b[searchKey] - a[searchKey]
      );
    setTmp(te);
  };
  const name = "kill";
  console.log(lckList[0][name]);
  return (
    <div>
      <select onChange={(e) => setSearchKey(e.target.value)}>
        {keys.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
      <input
        placeholder="name을 입력해 주세요"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onClickSearch}>search</button>
      <table>
        <thead>
          <th>rank</th>
          <th>name</th>
          <th>win</th>
          <th>lose</th>
          <th>winLoseDiff</th>
          <th>rate</th>
          <th>kda</th>
          <th>kill</th>
          <th>death</th>
          <th>assist</th>
        </thead>
        <tbody>
          {tmp
            // .filter((el) => el[searchKey].toString().includes(search))
            // .sort((a, b) =>
            //   searchKey === "rank"
            //     ? a.rank - b.rank
            //     : b[searchKey] - a[searchKey]
            // )
            .map((el, i, arr) => (
              <tr key={i}>
                <td>{el.rank}</td>
                <td>{el.name}</td>
                <td>{el.win}</td>
                <td>{el.lose}</td>
                <td>{el.winLoseDiff}</td>
                <td>{parseInt((el.win / (el.win + el.lose)) * 100) / 100}</td>
                <td>
                  {parseInt(((el.kill + el.assist) / el.death) * 100) / 100}
                </td>
                <td>{el.kill}</td>
                <td>{el.death}</td>
                <td>{el.assist}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

// const rateCal = (el) => {
//   el.rate = el.win / (el.win + el.lose);
//   return parseInt((el.win / (el.win + el.lose)) * 100) / 100;
// };

// const kadCal = (el) => {
//   el.kda = (el.kill + el.assist) / el.death;
//   return parseInt(((el.kill + el.assist) / el.death) * 100) / 100;
// };

export default App;
