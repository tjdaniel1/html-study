// public int sum(int a, int b){
//     return a+b;
// }

function sum(a, b) {
  return a + b;
}
const sum1 = (a, b) => a + b;

function diff(a, b) {
  return a - b;
}

const diff1 = (a, b) => {
  return a - b;
};

const division = (a, b) => {
  const sum = () => {
    return a + b;
  };
  return sum() / b;
};

const sum2 = (a, b = 2) => {
  return a + b;
};

const diff2 = (a, b = 2) => {
  return a - b;
};

const multi2 = (a, b) => {
  return a * b;
};

const division2 = (a, b) => {
  return a / b;
};
console.log(sum2(2));

console.log(division(1, 3));

console.log(diff2(sum2(diff2(sum2(3)), 10), 4));

//const list = [diff2, sum2];
//console.log(list[0](21));

const list = [sum2, diff2, multi2, division2, (a) => a * a];
let total = 0;
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
console.log(total);
const [sum3, diff3, multi3, division3, pow3] = list;
console.log(sum3(1, 2));
