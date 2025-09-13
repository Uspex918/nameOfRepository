// arr[99] = 0;
// console.log(arr)

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let value of arr){
//     console.log(value)
// }
// arr.forEach(function(el, i, arr){
//     console.log(`элементу ${el} принодлежит итерация ${i} внутри массива ${arr}`)
// })

// let chislo = arr.map(function(name){
//     return arr.length
// })
// console.log(chislo)

// let bolshe = arr.filter(function(num){
//     return num > 3
// })



const arr = [1,2,3,6,8,10,12]
// const str = "xleb,bulka,moloko,voda,yaica"

// const products = str.split(",")

arr.sort((a,b) => a-b)
// console.log(products)
// console.log(arr)

function sum() {
  console.log(arguments); // {0: 1, 1: 2, 2: 3, length: 3}
  console.log(arguments[0]); // 1
}
// sum(1, 2, 3);

const divs = document.querySelectorAll("div");
// console.log(divs); // NodeList(3) [div, div, div]
// console.log(divs.length); // 3

