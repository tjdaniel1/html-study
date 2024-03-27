// alert("ㅇㄴㅁㅇㅁ");
// const is = confirm("밥 먹었니");
// console.log(is);

// setTimeout(() => {
//   alert("hello");
// }, 2000);
// const interval = setInterval(() => {
//   alert("hello");
// }, 2000);
// setTimeout(() => clearInterval(interval), 5000);
// 1초마다 alert("hello") 이거 실행 할거고
// 3초마다 confirm("end?") yes 면 모든것을 종료 시킬거다

// const hello = setInterval(() => alert("hello"), 1000);
// const end = setInterval(() => {
//   if (confirm("hello")) {
//     clearInterval(hello);
//     clearInterval(end);
//   }
// }, 3000);
// const txt = document.getElementById("txt");
// let i = 0;
// setInterval(() => {
//   txt.innerHTML = `count : ${i++}`;
// }, 1000);
// setTimeout(() => {
//   txt.innerHTML = "hello";
// }, 2000);
const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
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
    kda: 2.89,
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
    kill: 377,
    death: 630,
    assist: 858,
  },
];

const box = document.getElementById("box");
const p = document.createElement("p");
p.innerHTML = "hello";
box.append(p);
const tbl = document.getElementById("tbl");
const drawTable = (teams) => {
  const tbody = document.getElementById("tbody");
  for (let i = 0; i < teams.length; i++) {
    const el = teams[i];
    const tr = document.createElement("tr");
    const rank = document.createElement("td");
    rank.innerHTML = `${el.rank} ${el.name}`;
    tr.append(rank);
    const win = document.createElement("td");
    win.innerHTML = el.win;
    tr.append(win);
    const lose = document.createElement("td");
    lose.innerHTML = el.lose;
    tr.append(lose);
    const winLoseDiff = document.createElement("td");
    winLoseDiff.innerHTML = el.winLoseDiff;
    tr.append(winLoseDiff);
    const rate = document.createElement("td");
    rate.innerHTML = Math.floor((el.win / (el.win + el.lose)) * 100) / 100;
    tr.append(rate);
    const kda = document.createElement("td");
    kda.innerHTML = Math.floor(((el.kill + el.assist) / el.death) * 100) / 100;
    tr.append(kda);
    const kill = document.createElement("td");
    kill.innerHTML = el.kill;
    tr.append(kill);
    const death = document.createElement("td");
    death.innerHTML = el.death;
    tr.append(death);
    const assist = document.createElement("td");
    assist.innerHTML = el.assist;
    tr.append(assist);
    tbody.append(tr);
  }
};
const removeTable = () => {
  const tbody = document.getElementById("tbody");
  tbody.remove();
  const tmp = document.createElement("tbody");
  tmp.setAttribute("id", "tbody");
  tbl.appendChild(tmp);
};

const tblSort = (key) => {
  const sortByKey = teams.sort((a, b) => b[key] - a[key]);
  removeTable();
  drawTable(sortByKey);
};
drawTable(teams);
