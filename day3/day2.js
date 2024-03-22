//let 변하는 변수 const 상수
// let i = 0;
// const i = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let j = 0; j < 10; j++) {
//   if (j === "0") {
//     console.log(j);
//   } else if (j === 0) console.log(true);
// }
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
