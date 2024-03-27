// alert("dadsasad");
// confirm("밥 먹었니");
// console.log("aa");

// setTimeout(() =>{
//     alert("hello");
// }, 2000);
// const interval = setInterval(() => {
//     alert("hello");
// }, 2000);
// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);

// const interval_1 = setInterval(() => {
//     alert("hello");
// }, 1000);
// const interval_2 = setInterval(() => {
//     const end = confirm("end?");
//     if(end){
//         clearInterval(interval_1);
//         clearInterval(interval_2);
//     }
// }, 3000);
const txt = document.getElementById("txt");
// console.log(txt);
// setTimeout(() => {
//     txt.innerHTML = "hello";
// }, 2000);
// var count = 0;
// setInterval(() => {
//     txt.innerHTML = "count : " + count++;
// }, 1000);

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

const setTable = () => {
  const table = document.getElementById("tbody");
  for (const team of teams) {
    const tr = document.createElement("tr");
    const rank = document.createElement("td");
    rank.innerHTML = team.rank;
    tr.append(rank);
    const name = document.createElement("td");
    name.innerHTML = team.name;
    tr.append(name);
    const win = document.createElement("td");
    win.innerHTML = team.win;
    tr.append(win);
    const lose = document.createElement("td");
    lose.innerHTML = team.lose;
    tr.append(lose);
    const winLoseDiff = document.createElement("td");
    winLoseDiff.innerHTML = team.winLoseDiff;
    tr.append(winLoseDiff);
    const winRate = document.createElement("td");
    winRate.innerHTML = (team.win / (team.win + team.lose)).toFixed(2);
    tr.append(winRate);
    const kda = document.createElement("td");
    kda.innerHTML = ((team.kill + team.assist) / team.death).toFixed(2);
    tr.append(kda);
    const kill = document.createElement("td");
    kill.innerHTML = team.kill;
    tr.append(kill);
    const death = document.createElement("td");
    death.innerHTML = team.death;
    tr.append(death);
    const assist = document.createElement("td");
    assist.innerHTML = team.assist;
    tr.append(assist);
    table.append(tr);
  }
};
const removeBody = () => {
  const body = document.getElementById("tbody");
  body.remove();
  const table = document.getElementById("table");
  const newBody = document.createElement("tbody");
  newBody.setAttribute("id", "tbody");
  table.append(newBody);
};
setTable();
const sortTableByWin = () => {
  teams.sort((a, b) => b.win - a.win);
  removeBody();
  setTable();
};
const sortTableByLose = () => {
  teams.sort((a, b) => b.lose - a.lose);
  removeBody();
  setTable();
};
const sortTableByDiff = () => {
  teams.sort((a, b) => b.winLoseDiff - a.winLoseDiff);
  removeBody();
  setTable();
};
const sortTableByWinRate = () => {
  teams.sort((a, b) => {
    a_winRate = a.win / (a.win + a.lose);
    b_winRate = b.win / (b.win + b.lose);
    return b_winRate - a_winRate;
  });
  removeBody();
  setTable();
};
const sortTableByKDA = () => {
  teams.sort((a, b) => {
    a_kda = (a.kill + a.assist) / a.death;
    b_kda = (b.kill + b.assist) / b.death;
    return b_kda - a_kda;
  });
  removeBody();
  setTable();
};
const sortTableByKilll = () => {
  teams.sort((a, b) => b.kill - a.kill);
  removeBody();
  setTable();
};
const sortTableByDeath = () => {
  teams.sort((a, b) => b.death - a.death);
  removeBody();
  setTable();
};
const sortTableByAssist = () => {
  teams.sort((a, b) => b.assist - a.assist);
  removeBody();
  setTable();
};

// const ageAsc = students.sort((a, b) => b.age - a.age);
// console.log(ageAsc);
