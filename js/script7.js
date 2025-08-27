// hello(5)

// function hello(name) {
//   console.log(`Привет ${name} 😊`)
// }



// const hello = function (name) {
//     console.log(`Привет ${name} 😊`)
// }

// hello('Иван')
// // hello is not a function

// function makeShawarma(y) {
//   console.log(`Ваша шаурма с ${y} готова 🌯`)
// }

// makeShawarma("мясом")

// function functionA() {
//   function functionB() {
//   }

//   functionB()
// }

// functionA()
// showMessage('Маша', 'Привет!')

// function showMessage(user, message) {
//   console.log(user + ': ' + message)
// }

// const numberFour = 4

// function five() {
//   const numberFive = numberFour + 1
//   return numberFive
// }

// console.log(numberFour)
// 4
// console.log(five())
// 5
// console.log(numberFive)
// numberFive is not defined
// const divider = (number) => console.log(number / 2)
// divider(5)


// const divider = (numerator, denominator) => {
//   const result = numerator / denominator
//   return result
// }
// console.log(divider(6,1))
// divider(10,5)

// function fac(n) {
//   if (n < 2) {
//     return 1
//   } else {
//     return n * fac(n-1);
//   }
// }

// console.log(fac(3))


// let a = 3
// function addTwo(x) {
// let ret = x + 2
// return ret
// }
// let b = addTwo(a)
// console.log(b)


// let val1 = 2
// function multiplyThis(n) {
// let ret = n * val1
// return ret
// }
// let multiplied = multiplyThis(6)
// console.log('example of scope:', multiplied)



// function createAdder() {
// function addNumbers(a, b) {
// let ret = a + b
// return ret
// }
// return addNumbers ()
// }
// let adder = createAdder()
// console.log(adder)

// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter   }
//    return myFunction
//  }
//  const increment = createCounter()
//  const c1 = increment()
//  const c2 = increment()
//  const c3 = increment()

//  console.log('example increment', c1, c2, c3)



//  1: function createCounter() {
//  2:   let counter = 0
//  3:   const myFunction = function() {
//  4:     counter = counter + 1
//  5:     return counter
//  6:   }
//  7:   return myFunction
//  8: }
//  9: const increment = createCounter()
// 10: const c1 = increment()
// 11: const c2 = increment()
// 12: const c3 = increment()
// 13: console.log('example increment', c1, c2, c3)

// function createCounter() {
//   let counter = 0 // приватная переменная, доступна только внутри замыкания

//   return {
//     increment: function() {
//       counter = counter + 1
//       return counter
//     },
//     decrement: function() {
//       counter = counter - 1
//       return counter
//     },
//     reset: function() {
//       counter = 0
//       return counter
//     },
//     getValue: function() {
//       return counter
//     }
//   }
// }

// // создаём новый счётчик
// const counterA = createCounter()

// console.log(counterA.increment()) // 1
// console.log(counterA.increment()) // 2
// console.log(counterA.decrement()) // 1
// console.log(counterA.getValue())  // 1
// console.log(counterA.reset())     // 0
// console.log(counterA.getValue())  // 0

// // создаём независимый второй счётчик
// const counterB = createCounter()
// console.log(counterB.increment()) // 1 (независимый от counterA)
