const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(arg){
        const {age} = arg
        const {languages} = arg.skills
        let stroka = `Мне ${age} и я владею языками:`
        languages.forEach(function(a){
            stroka += ` ${a.toUpperCase()}`
        })
        console.log(stroka)
        return stroka
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter)

function showExperience(pPP) {
const{exp} = pPP.skills
return exp
}
console.log(showExperience(personalPlanPeter))

function showProgrammingLangs(pPP) {
    let text = ''
    const {programmingLangs: progLan} = pPP.skills
    for (let kluch in progLan){
        text += `Язык ${kluch} изучен на ${progLan[kluch]}\n`
    }
    return text
}
console.log(showProgrammingLangs(personalPlanPeter))
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(fam) {
    let str = ''
    fam.length !== 0? str = "Семья состоит из: " : str = "Семья пуста"
    fam.forEach(chlen => {
        str += `${chlen} `
    })
    return str
}
console.log(showFamily(family))


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(elem => {
        console.log(elem.toLowerCase())
    })
   
}
standardizeStrings(favoriteCities)

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== "string"){
        return "Ошибка!"
    }
    return str.split("").reverse().join("")
}
console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = ""
    arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n"
    arr.forEach(function(curr){
        if (curr !== missingCurr){
            str += `${curr}\n`
        }
        // if (curr === missingCurr){
        //     str += `${curr} не осталось\n`
        // }

    })
      // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }
    return str
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"))