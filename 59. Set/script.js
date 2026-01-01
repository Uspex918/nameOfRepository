'use strict';

const arr = ['Alex', 'Ann', 'Oleg', 'Alex']

const set = new Set(arr)

set.add('Ivan')
set.add('Oleg')

console.log(set)
for (let value of set) console.log(value)

set.forEach(value => console.log(value))
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

function unique(p){
    return Array.from(new Set(p))
}

console.log(unique(arr))