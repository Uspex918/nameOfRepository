'use strict';


const opisanie = Symbol("Opisanie")
const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "01/01/2000",
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`)
    }
}



// const arr = ["b", "a", "c"]
// Array.prototype.someMethod = function(){}
// console.dir(arr)

// for (const znachenya of arr){
//     console.log(znachenya)
// }


// for (const znachenya of arr) {
//     console.log(znachenya)
// }
// const str = "string"
// for (const znachenya of str) {
//     console.log(znachenya)
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function(){
//         console.log("Hello")
//     }
// }

// salaries[Symbol.iterator] = function(){
//     let current = this.john
//     let last = this.ann
    
//     return {
//         next(){
//             if(current < last){
//                 current += 500
//                 return {done: false, value: current}
//             } else {
//                 return {done: true}
//             }

//         }
//     }
// }

// for (let value of salaries) {
//     console.log(value);
// }
// const iterator = salaries[Symbol.iterator]()
// console.log(iterator.next())

let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");

let objMap = Object.fromEntries(map.entries())
console.log(objMap)


let map2 = Object.fromEntries([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);
console.log(map2)

function logDecorator(func) {
    return function(...args) {
        console.log("Вызов с аргументами:", args);
        return func.apply(this, args);
    };
}
function sum(a, b) {
    return a + b;
}

const wrappedSum = logDecorator(sum);

console.log(wrappedSum(5, 10)); 
