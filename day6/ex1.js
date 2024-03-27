//변수 선언
let text = "hi";
text = 1;

// function sum (a,b) {
//     return a+b;
// }
const sum1 = (a, b) => {
  return a + b;
};
console.log(sum1("hi", 2));

const print = (i) => {
  console.log("print");
  return i === 2;
};
if (print(2) && print(3)) {
}
const ppp = print(1) && 7;
console.log(ppp);
const ppp2 = print(2) || 7;
console.log(ppp2);

const arr = [1, 2, 3, 4, 5];

arr.sort; // 정렬
arr.map; // 원본을 가공할때
arr.filter; //거를때

const obj = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};
console.log(obj.toString());

console.log(obj.address);
console.log(obj.address?.city);
console.log(obj.address ? obj.address.city : obj.address);

// const { name, age, gender } = obj;
// console.log(gender);
const makePerson = (name, age) => {
  return { name, age };
};
console.log(makePerson("이수진", 20));

const isAdult = ({ name, age, ...rest }) => {
  //name, age는 꼭 있어야하고 rest는 없어도된다
  return { name, age, isAdult: age > 20, ...rest };
};

const 이수진 = makePerson("이수진", 20);
console.log(isAdult(이수진));
