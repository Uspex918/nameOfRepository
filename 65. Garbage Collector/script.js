"use strict"
// function createGlobalVariables() {
//     leaking1 = 'I leak into the global scope'; // присвоение значения необъявленной переменной
//     this.leaking2 = 'I also leak into the global scope'; // 'this' указывает на глобальный объект
// };
// createGlobalVariables();
// console.log(window.leaking1);
// console.log(window.leaking2);



// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Hello'); // функция inner замкнута на переменной potentiallyHugeArray 
//         console.log(potentiallyHugeArray);
//     };
// };
// const sayHello = outer(); // содержит определение/вызов функции inner
 
// function repeat(fn, num) {
//     for (let i = 0; i < num; i++){
//         fn();
//     }
// }
// repeat(sayHello, 10);



// function func(){
//     smth = "string"
// }
// func()
// console.log(smth)

// const someRes = "getData()"
// const node = document.querySelector(".btn")


// let id = setInterval(function(){
//     if (node){
//         node.innerHTML += someRes
//     }
// }, 1000)
// clearInterval(id)

// function outer() {
//     const potentiallyHugeArray = [];

//     return function inner() {
//         potentiallyHugeArray.push("Hello");
//         console.log(potentiallyHugeArray);

//         if (potentiallyHugeArray.length === 10) {
//             clearInterval(timerId); // остановка таймера
//         }
//     }
// }

// let sayHello = outer();

// let timerId = setInterval(sayHello, 1000);

// function createElement(){
//     const div = document.createElement("div")
//     div.id = "test"
//     return div
// }

// const testDiv = createElement()

// document.body.append(testDiv)

// function deleteElement(){
//     // document.querySelector(".wrapper").remove();

//     // const wrapper = document.getElementsByClassName("wrapper")[0];
//     // document.body.removeChild(wrapper);

//     // document.body.removeChild(document.getElementById("test"))
// }
// deleteElement()

