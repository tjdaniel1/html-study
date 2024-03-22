// //짝수인지 아닌지 하나하나 계산해서 리스트 만들어서 보여주기
const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
// const isEvenList = [];

// for (i = 0; i < list.length; i++) {
//   let istrue = true;
//   //if (list[i] % 2 === 0) isEvenList.push(list[i]);
//   istrue = list[i] % 2 === 0 ? true : false;
//   isEvenList.push(istrue);
// }

// console.log(isEvenList);

//map은 기준 리스트를 가지고 새로운 값이 다른 리스트를 만드는 것
const isEvenList = list.map((element, index, arr) => {
  //   console.log(element, index, arr);
  return element % 2 === 0;
});
console.log(isEvenList);
