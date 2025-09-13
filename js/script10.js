function first(){
    setTimeout(function(){
        console.log(1)
    }, 500)
}

function second(){
    console.log(2)
}

// first()
// second()

function learnJS(lang, cb){
    console.log(`Я учу: ${lang}`)
    cb()
}

function done(){
    console.log("Я прошел этот урок!")
}

// learnJS("JavaScript", done)

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor", 10];

// деструктурирующее присваивание
// let firstName = arr[0];
let [fn, surname, ten] = arr;
let surname2 = arr[1]
// let [firstName, surname, ten] = arr;

// console.log(firstName); // Ilya
// console.log(surname2); // Ilya
// console.log(fn); 
// console.log(surname);  // Kantor
// console.log(ten);  // Kantor
// console.log(arr);  // Kantor

let [,,,rr] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(rr);

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3])

// console.log(b)

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');

// console.log(user.name); // Ilya
// console.log(user.surname); // Kantor
// console.log(user); // Kantor

// let user = {
//   name: "John",
//   age: 30
// };

// // цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//   alert(`${key}: ${value}`); // name:John, затем age:30
// }
// let set = new Set([1, 2, 2, 3]);
// console.log(set); // Set(3) {1, 2, 3}
// console.log(set.has(2)); // true

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {width: w, title, height} = options;

// alert(title);  // Menu
// alert(height); // 200
// alert(w);  // 100
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu", // отсутствует в объекте (используется значение по умолчанию)
  extra: e
} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut
// console.log(e); 
// console.log(options.size); 
// let des = Object.getOwnPropertyDescriptor(options, "items");
// console.log(des); 

// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(user)
// console.log(descriptor)
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// // set fullName запустится с данным значением
// console.log(user.fullName); 
// user.fullName = "Alice Cooper";
// console.log(user.fullName); 

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper
// let user = {
//   name: "John",
//   surname: "Smith"
// };

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// });

// alert(user.fullName);
// user.fullName = "Eleonora Nogovitsina"
// alert(user.fullName);

// for(let key in user) alert(key);

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // ключи
//   console.log( key );  // name, age, isAdmin
//   // значения ключей
//   console.log( user[key] ); // John, 30, true
// }