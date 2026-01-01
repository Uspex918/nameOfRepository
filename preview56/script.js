'use strict';


const opisanie = Symbol("Opisanie")
const user = {
    name: "Alex",
    [opisanie]: "235638",
    surname: "Smith",
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`)
    }
}


Object.defineProperty(user, "birthday", {value: "01/01/2000", enumerable: true, configurable: true})

console.log(Object.getOwnPropertyDescriptor(user, opisanie))
Object.defineProperty(user,"showMyPublicData", {enumerable: true})

// for (let i in user) console.log(i)

//     Object.defineProperties(user, {
//         birthday: {writable: false},
//         surname:{writable: true}
//     })

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))