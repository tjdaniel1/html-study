// alert("asdasfas");
// const is = confirm("밥 먹었니");
// console.log(is);

// setTimeout(() => {
//   alert("hello");
// }, 2000);

// const interval = setInterval(() => {
//   alert("hello");
// }, 2000);

// setTimeout(() => clearInterval(interval), 5000);

// 1초마다 alter("hello") 이거 실행 할 거고
// 3초마다 confirm("end?") yes 모든 것을 종료

// const interval = setInterval(() => {
//   alert("hello");
// }, 1000);

// const intervalConfirm = setInterval(() => {
//   if (confirm("end?")) {
//     clearInterval(interval);
//     clearInterval(intervalConfirm);
//   }
// }, 3000);

// const txt = document.getElementById("txt");
// console.log(txt);

// let count = 1;
// setInterval(() => {
//   txt.innerHTML = `count:  ${count++}`;
// }, 1000);

const teams = [
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

const ageAsc = teams.sort((a, b) => a.age - b.age);
console.log(ageAsc);

const box = document.getElementById("box");

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
  el.rate = Math.floor((el.win / (el.win + el.lose)) * 100) / 100;
  rate.innerHTML = el.rate;
  tr.append(rate);
  const kda = document.createElement("td");
  el.kda = Math.floor(((el.kill + el.assist) / el.death) * 100) / 100;
  kda.innerHTML = el.kda;
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
let isAsc = true;
const onClickSortHandler = (property) => {
  let asc;
  if (property === "rank") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.rank - b.rank);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.rank - a.rank);
      isAsc = true;
    }
  }
  if (property === "win") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.win - b.win);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.win - a.win);
      isAsc = true;
    }
  }
  if (property === "lose") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.lose - b.lose);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.lose - a.lose);
      isAsc = true;
    }
  }
  if (property === "winLoseDiff") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.winLoseDiff - b.winLoseDiff);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.winLoseDiff - a.winLoseDiff);
      isAsc = true;
    }
  }
  if (property === "kill") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.kill - b.kill);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.kill - a.kill);
      isAsc = true;
    }
  }
  if (property === "death") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.death - b.death);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.death - a.death);
      isAsc = true;
    }
  }
  if (property === "assist") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.assist - b.assist);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.assist - a.assist);
      isAsc = true;
    }
  }
  if (property === "rate") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.rate - b.rate);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.rate - a.rate);
      isAsc = true;
    }
  }
  if (property === "kda") {
    if (isAsc) {
      asc = teams.sort((a, b) => a.kda - b.kda);
      isAsc = false;
    } else {
      asc = teams.sort((a, b) => b.kda - a.kda);
      isAsc = true;
    }
  }
  const table = document.getElementsByTagName("table");
  const tbody = getCleanTbody();
  for (let i = 0; i < asc.length; i++) {
    const el = asc[i];
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
    tbody.setAttribute("id", "tbody");
    tbody.append(tr);
    table[0].append(tbody);
  }
};
const getCleanTbody = () => {
  let tbody = document.getElementById("tbody");
  if (tbody) tbody.remove();
  return document.createElement("tbody");
};
