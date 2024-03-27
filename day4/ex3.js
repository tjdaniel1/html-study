const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];
// map
const isAdultList = students.map((el, i, arr) => {
  return { ...el, isAdult: el.age > 19 };
});
console.log(isAdultList);
const ageUpFunc = (el) => ({ ...el, age: el.age++ });
const ageup = students.map(ageUpFunc);

const sum = (a, b) => a + b;
console.log(ageup);
// filter
const adultList = students.filter((el, index, arr) => {
  return el.age > 19;
});
console.log(adultList);

const kimList = students.filter((el) => el.name.startsWith("김"));
console.log(kimList);

// sort
const ageAsc = students.sort((a, b) => b.age - a.age);
console.log(ageAsc);
