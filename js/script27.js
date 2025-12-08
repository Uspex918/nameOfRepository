const surfaceAreaCalcutator = (radius) => {
    return 4*3.14*square(radius)
}

const square = (n) => {
    return n*n
}

const surfaceOfMars = surfaceAreaCalcutator(3390)

// console.log(typeof(surfaceAreaCalcutator))
// console.log(surfaceOfMars)
// console.log(typeof(square))


const factorial = (n) => {
    if (n === 1){
        return 1
    } else {
        return n*factorial(n-1)
    }
}

const answer = factorial(5)

console.log(answer)


function pow(x,y){
    if(y===0){
        return 1
    } else {
        return x*pow(x,y-1)
    }
}
const result = pow(10,3)
console.log(result)



const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
const res = Object.values(object1)

// console.log(Array.isArray(Object.values(object1)))
// console.log(typeof(Object.values(object1)));

function myuw(x,n){
    if(n===0){
        return 1
    } else {
        return x*myuw(x, n-1)
    }
}
const resultat = myuw(2,5)
console.log(resultat)