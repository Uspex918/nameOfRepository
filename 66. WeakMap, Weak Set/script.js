"use strict"
// let user = {name: "Ivan"}

// const arr = [user]

// let map = new Map()
// map.set(user, "data")

// let weakMap = new WeakMap()
// weakMap.set(user, "data")

// user = null

// console.log(user)
// console.log(arr[0])
// console.log(map.get(user))
// console.log(map.keys())
// console.log(weakMap.get(user))


let cache = new WeakMap()

function cacheUser(user){
    if (!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: "Elena"}
let alex = {name: "Alex"}

cacheUser(lena)
cacheUser(alex)

alex = null

console.log(cache.get(lena))
console.log(cache.get(alex))

let readMessages = new WeakSet()

let messages = [
    {text: "Hello", from: "John"},
    {text: "World", from: "Alex"},
    
]

readMessages.add(messages[0])
readMessages.add(messages[1])
messages.shift()
messages[0] = null
console.log(readMessages.has(messages[0]))