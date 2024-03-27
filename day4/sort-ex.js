const list = [3, 1, 4, 655, 1, 2, 3, 5, 21, 10, 5, 7, 8];
const solist = list.sort((a, b) => {
  console.log({ a, b });
  return b - a;
});
console.log(solist);
