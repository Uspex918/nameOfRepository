// // console.log("Hello world!")
// const user = { name: "Alice" };
// let arr = [1, 2, 3];
// let five = 5
// // console.log(user); // function toString() { [native code] }

// function foo() {
//     let k
//    k: "hi"
//    return k
// }
// // foo()
// // console.log(foo.__proto__ === Function.prototype)
// const animal = {
//   eats: true,
//   walk() {
//     console.log("walks");
//   }
// };

// const rabbit = Object.create(animal); // создаём с animal в прототипе
// rabbit.jumps = true;

// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true
// console.log(animal.jumps); // true

let str = "some"
let strObj = new String(str)
// console.log(typeof(str))
// console.log(typeof(strObj))

// console.dir([1,2,3])
class Person {
  // Параметры конструктора называем по-своему: userName и userAge
  constructor(userName, userAge) {
    // Свойства объекта называем по-своему: name и age
    this.name = userName;  // this.name — это свойство объекта
    this.age = userAge;    // this.age — это свойство объекта
  }

  sayHello() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

// Создаём объекты
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

// Проверяем свойства
// console.log(alice); // Alice
// console.log(alice.age);  // 25
// console.log(bob.name);   // Bob
// console.log(bob.age);    // 30

// // Вызов метода
// alice.sayHello(); // Привет, меня зовут Alice и мне 25 лет.
// bob.sayHello();   // Привет, меня зовут Bob и мне 30 лет.
// bob.sayHello();   // Привет, меня зовут Bob и мне 30 лет.

// console.log([1,2,3])

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello")
//     }
// }

// // const jonh = {
// //     health: 300
// // }

// // jonh.__proto__ = soldier
// // Object.setPrototypeOf(jonh, soldier)
// const jonh = Object.create(soldier)
// jonh.health = 500

// console.log(jonh.health)
// console.log(jonh.sayHello())

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
            
            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.showMyDB()
// personalMovieDB.toggleVisibleMyDB()
// personalMovieDB.writeYourGenres()
// console.log(personalMovieDB)