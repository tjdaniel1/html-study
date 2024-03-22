//list, object
// int[] arr = new int[123];
// list<Integer> list = new ArrayList<>();
const list = []; //100...1000
const list369 = []; //369리스트

for (let index = 100; index <= 1000; index++) {
  list.push(index);
}

// arr[0] = 1;
// list.add(1);

// for (let i = 1; i <= 10; i++) {
//   list.push(i);
// }
// console.log(list[0]);
// console.log(list.length);

// for (let j = 0; j < list.length; j++) {
//   if (list[j] == 3) {
//     console.log("짝");
//   } else if (list[j] == 6) {
//     console.log("짝");
//   } else if (list[j] == 9) {
//     console.log("짝");
//   } else console.log(list[j]);
// }
// for (let i = 1; i <= 50; i++) {
//   let num = i;
//   num =
//     (i + "").includes("3") || (i + "").includes("6") || (i + "").includes("9")
//       ? "짝"
//       : num;
//   list.push(num);
// }
// console.log(list);

for (let i = 0; i <= 100; i++) {
  let j = list[i];
  j =
    list[i].toString().includes("3") ||
    (j + "").includes("6") ||
    (j + "").includes("9")
      ? "짝"
      : j;
  list369.push(j);
}
console.log(list369);
