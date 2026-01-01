'use strict';

// let id  = Symbol("idNameOut")
// const obj = {
//     "name": "Test",
//     [Symbol("idNameIn")]: "IN"
//     // [id]: "OUT",
//     // getId: function(){
//     //     return this[id]
//     // },
//     // getId: function(){
//     //     return this[idNameIn]
//     // }
// }




// console.log(obj)
// console.log(obj[id])
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]])

// for (let value in obj) console.log(value, obj[value])


const myAsomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123,
    [Symbol.for("idNameIn")]: "IN"
}

myAsomeDB.id = "32232332"

console.log(myAsomeDB)
console.log(myAsomeDB["id"])
console.log(myAsomeDB[Symbol.for("idNameIn")])
console.log(myAsomeDB[Object.getOwnPropertySymbols(myAsomeDB)[0]])