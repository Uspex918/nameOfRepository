// console.log(typeof(5-"f"))

// const num = 5
// console.log("https://stranica/" + num)

// const fontSize = 26 +"px"
// console.log(fontSize)

// console.log(typeof(Number("f")))
// console.log(Number("f"))

// console.log(typeof(+"5"))
// console.log(parseInt("15px"))

// let answ = +prompt("Hello", "")
// console.log(answ)

// 0, "", null, undefined, NaN;
// let switcher = null
// if (switcher){
//     console.log("Working...")
// }

// switcher = 100
// if (switcher){
//     console.log("Working...")
// }

// console.log(!!"44444")

let a = 3
function addTwo(x) {
  let ret = x + 2
  return ret
}
let b = addTwo(a)
console.log(b)

let val1 = 2
function multiplyThis(n) {
  let ret = n * val1
  return ret
}
let multiplied = multiplyThis(6)
console.log('example of scope:', multiplied)

let val = 7
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b
    return ret
  }
  return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)

function createCounter() {
  let counter = 0
  const myFunction = function() {
    counter = counter + 30
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

let c = 4
const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)

function sayHiBye(firstName, lastName) {

  // функция-помощник, которую мы используем ниже
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log(( "Hello, " + getFullName() ));
  console.log(( "Bye, " + getFullName() ));

}
sayHiBye()

function makeCounter() {
  let count = 0;

  return function() {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();

console.log(( counter() )); // 0
console.log(( counter() )); // 1
console.log(( counter() )); // 2

console.log(makeCounter.name)
console.log(makeCounter.length)

let sayHi = function func(who) {
  if (who) {
    console.log((`Hello, ${who}`));
  } else {
    func("Guest"); // использует func, чтобы снова вызвать себя же
  }
};

sayHi(); // Hello, Guest
