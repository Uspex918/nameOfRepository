'use strict';

const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "01/01/2000",
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`)
    }
}

// console.log(Object.keys(user))

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
    1
]
const budget = [5000, 15000, 25000, 1000000]


const card = new Map([
    [{paper: 400}, 8000]
])

shops.forEach((element, index) => {
    card.set(element, budget[index])
})

// console.log(card.get(1))
// console.log(card.get(shops[3]))
// console.log(card.has(shops[3]))
// console.log(card.size)

const goods = []
const goods2 = []
const goods3 = []
const goods4 = []
const goods5 = []
for (let key of card.keys()){
    goods.push(Object.keys(key)[0])
}
// for (let [k, ent] of card){
    //     goods4.push(Object.keys(k)[0])
    // }
    for (let key of card.keys()){
        goods2.push(Object.values(key)[0])
    }
    for (let val of card.values()){
        goods3.push(val)
    }
    // for (let [k, val] of card){
        //     goods3.push(val)
        // }
        for (let ent of card){
            goods4.push(ent)
        }
        
        card.forEach((value, key, map) => {
            goods5.push(value, key)
        })
        
        
        

// console.log(card.keys())
// console.log(card)
// console.log(goods)
// console.log(goods2)
// console.log(goods3)
// console.log(goods4)
// console.log(goods5)

const card2 = new Map(Object.entries(user))
console.log(card2)

const card3 = Object.fromEntries(card2)
console.log(card3)
