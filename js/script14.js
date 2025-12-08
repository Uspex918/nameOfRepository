// function copy(mainObj) {
//   let objCopy = {}; // objCopy будет хранить копию mainObj
//   let key;

//   for (key in mainObj) {
//     objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
//   }
//   return objCopy;
// }

// const mainObj = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// }

// let y = Object.assign({},mainObj)

// console.log(copy(mainObj));
// y.c.x = 10;
// console.log(mainObj);
// console.log(y);



// obj.b.c = 20;
// console.log(obj); // { a: 1, b: { c: 20 } }
// console.log(newObj); // { a: 1, b: { c: 2 } } (Новый нетронутый объект!)
// let obj = { 
//   a: 'a',
//   b: { 
//     c: 'c',
//     d: 'd',
//   },
// }

// obj.c = obj.b;
// obj.e = obj.a;
// obj.b.c = obj.c;
// obj.b.d = obj.b;
// obj.b.e = obj.b.c;

// let newObj = JSON.parse(JSON.stringify(obj));
// let newObj = Object.assign({}, obj);
// let newObj = structuredClone(obj)
// console.log(newObj);


// let obj = {
//   a: 1,
//   b: { c: 2 }
// };

// let copy = Object.assign({}, obj);

// obj.b.c = 42;

// console.log(copy); // { a: 1, b: { c: 42 } } ❌ (ссылка одна и та же!)
// console.log(obj); // { a: 1, b: { c: 42 } } ❌ (ссылка одна и та же!)

// var v1 = "some text";
// var v2 = true;
// var v3 = 10;
// var v4 = Symbol("foo");

// var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);

// console.log(obj)
// let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

// console.log(firstName); // Юлий
// console.log(lastName);  // Цезарь
// console.log(rest); 

// function defaultLastName() {
//   return Date.now() + '-visitor';
// }

// // lastName получит значение, соответствующее текущей дате:
// let [firstName, lastName=defaultLastName()] = ["Вася"];

// console.log(firstName); // Вася
// console.log(lastName);  // 1436...-visitor
// let a, b;
// ({a, b} = {a:5, b:6});
// console.log(a)
// console.log(b)
// const user = {name: "Alice", age: 25};
// let name = user.name;
// let age = user.age;
// console.log(name, age);

// const user = {name: "Alice", age: 25};
// let {name, age} = user;
// console.log(name, age); // Alice 25
