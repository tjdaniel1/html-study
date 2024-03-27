// class Person{
//     age;
//     name;

//     constructor(age, name){
//         this.age = age;
//     }
// }

// const person = new Person(1,"32");
// person.age

// const name = "asdf";
// const obj = { name };
// console.log(obj);

const observer = new IntersectionObserver((entries, observer) => {
  //처음에 실행되고, 타겟들이 보이면 다시 호출된다
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      console.log("확인", entrie);
      entrie.target.className = "box show";
    } else {
      console.log("미확인");
      entrie.target.className = "box";
    }
  });
});
const target = document.getElementsByClassName("box")[3];
observer.observe(target); //이 타겟을 감시한다.

// 보라색 function, 파랑색 field
