'use strict';

function showArgs() {
const arr = Array.from(arguments)
// const arr = [...arguments]
// const arr = [].map.call(arguments,g => g.toUpperCase())
// const arr = Array.from(arguments,g => g.toUpperCase())
// const arr = [...arguments].map(g => g.toUpperCase())
  console.log(arr);
}

showArgs('a', 'b', 'c');

function sayHello() {
  console.log(`Привет, меня зовут ${this.name}`);
}

const user = { name: 'Alex' };

sayHello.call(user); // Привет, меня зовут Alex
