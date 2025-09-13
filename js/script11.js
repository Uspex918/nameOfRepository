const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function(){
        console.log("Test");
    }
}
// console.log(options.name)
// delete options.name
// console.log(options)

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key] ){
//             console.log(`Свойство ${i} имеет значение: ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение: ${options[key]}`)
//     }
// }

// console.log(Object.keys(options).length)
// options.makeTest()

// const {border, bg} = options.colors;
// const {colors} = options;
// const {makeTest} = options;
// console.log(bg)
// console.log(colors)
// console.log(makeTest)
// Object.prototype.objCustom = function() {};
// Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7, "dg"].map(item => item.length);
iterable.foo = 'hello';
console.dir(iterable)
console.log(typeof(iterable[2]))


// for (let i in iterable) {
//   console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (let i in iterable) {
//   if (iterable.hasOwnProperty(i)) {
//     console.log(i); // выведет 0, 1, 2, "foo"
//   }
// }

// for (let i of iterable) {
//   console.log(i); // выведет 3, 5, 7
// }
