// 리스트를 만들고 1 .. 10까지 넣어라
const list = [];

for (let i = 1; i <= 10; i++) {
  list.push(i);
}

list["5"] = 10;
// console.log(list);

// object {}
const obj = { age: 10, print: () => console.log(obj["age"]) };
obj["name"] = "park";
// Map <String , Integer> map  = new HashMap<>();
console.log(obj);
obj["print"]();
for (let i = 1; i <= 10; i++) {
  obj[i - 1] = i;
}

const classRoom = {
  students: [
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],
  manager: [{ name: "송희", age: 30 }],
}; //json
console.log(classRoom.students[1].name);
classRoom.list = list;
list[0] = 100;
console.log(classRoom);
const list2 = classRoom.list;
