// function Person (a, b){
//     this.name = a;
//     this.age = b;
// }


// let user2 = new Person("Belice", 22);

// console.log(user2)


// class Persona {
//     constructor(a,b){
//         this.name = a
//         this.age = b
//     }
// }
// let user5 = new Persona("bob", 41)

// console.log(user5)

// let num = new Number(55)
// console.log(num)
// console.log(typeof(num))

// const str = "test";
// const arr = [1,2,4]

// console.log(str.length)
// console.log(typeof(str.length))
// console.log(arr.length)
// console.log(typeof(arr.length))

// let J = str.toUpperCase();
// let L = J.toLowerCase();
// console.log(str.toUpperCase())


// console.log(str);
// console.log(J);
// console.log(L);

// const fruit = "Some fruit";
// console.log(fruit.slice(5))


// const test = "12.2px"
// console.log(parseFloat(test))

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", "")
        const b = prompt("На сколько оцените его?", "")

        if(a != null && b != null && a != "" && b != "" && a. length < 50){
            personalMovieDB.movies[a] = b;
            console.log("done")
        } else {
            console.log("error")
            i--;
        }

    }
}

// rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов")
    } else {
        console.log("Вы классический зритель")
    }
}

// detectPersonalLevel();

function showMyDB(hid){
    if(!hid){
        console.log(personalMovieDB)
    }
}
// showMyDB(personalMovieDB.privat)

function writeYourGenres(){
    for (let i =1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`"Ваш любимый жанр под номером ${i}`);
    }
}

// writeYourGenres();



// console.log(personalMovieDB);


function calculateVolumeAndArea(k) {
    if(typeof(k) != 'number' || k < 0 || !Number.isInteger(k)){
    return "При вычислении произошла ошибка";}
    
    let ob;
    let pov;
    
    ob = k*k*k;
    pov = 6 * (k*k)
    
     return `Объем куба: ${ob}, площадь всей поверхности: ${pov}`;
}

// console.log(calculateVolumeAndArea(5));

function getCoupeNumber(k) {
    if(typeof(k) != 'number' || k < 0 || !Number.isInteger(k)){
    return "Ошибка. Проверьте правильность введенного номера места";}

    if (k === 0 || k > 36){
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(k/4)
}
// console.log(getCoupeNumber(9));
function getTimeFromMinutes(k) {
    if(typeof(k) != 'number' || k < 0 || !Number.isInteger(k)){
    return "Ошибка, проверьте данные";}

    let chas = Math.floor(k/60)
    let minut = k % 60

    let grammatikaChasa = '';
    switch(chas){
        case 0:
            grammatikaChasa = "часов";
            break;
        case 1:
            grammatikaChasa = "час";
            break;
        case 2:
        case 3:
        case 4:
            grammatikaChasa = "часа";
            break;
        default:
            grammatikaChasa = "часов"

    }
    let gMinut = minut;
    if (gMinut == 0 || gMinut >= 5 && gMinut <= 20 || gMinut >= 25 && gMinut<=30){
        gMinut = "минут"
    } else if ( gMinut == 1 || gMinut == 31){
         gMinut = "минута"
    }
     else if ( gMinut >= 2 && gMinut <= 4 || gMinut >=22 && gMinut <=24){
        gMinut = "минуты"
    }
    

    if (k >= 0 || k < 600){
        return `Это ${chas} ${grammatikaChasa} и ${minut} ${gMinut}`;
    } 

 
}

// console.log(getTimeFromMinutes(142))
// console.log(getTimeFromMinutes(91))

function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

// console.log(findMaxNumber(1, 5, 6.6, 10.5));
// console.log(findMaxNumber(1, 5, '6', '10'));

function fib(num) {

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

// console.log(fib(4))

function fibArray(num) {
  let result = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    result.push(first);
    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}
// console.dir(fibArray(5))
// console.log(fibArray(5))
// console.log(document.body)
// console.dir(document.body)



// console.log(h.trim())

// console.log(Number("") == Number(" "))

// заменим цвет фона на красный,
// console.log(items);   // HTMLCollection(3) [li, li, li]
// console.log(items[0].textContent); // <li>Первый</li>


// console.log(div.nodeType);              // 1 (ELEMENT_NODE)
// console.log(div.firstChild.nodeType);   // 3 (TEXT_NODE: "Привет ")
// console.dir(div.childNodes[1].nodeType); // 8 (COMMENT_NODE)
// console.log(div.lastChild.nodeType);    // 1 (ELEMENT_NODE: <span>)
