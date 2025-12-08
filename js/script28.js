let students = {
    "js": [
    {
        name: "John",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],

    "html": {
        "basic": [
        {
            name: "Peter",
            progress: 20
        },
        {
            name: "Ann",
            progress: 18
        }],

        "pro": [{
        name: "Sam",
        progress: 10
        }]
    }
}

// console.log(Object.values(students))


// function gTPBI(data){
//     let total = 0
//     let students = 0

//     for (let znachenya of Object.values(data)){
//         if (Array.isArray(znachenya)){
//             students += znachenya.length
//             for (let i = 0; i < znachenya.length; i++){
//                 total += znachenya[i].progress
//             }
//         } else {
//             for (let subZnachenya of Object.values(znachenya)){
//                 if (Array.isArray(subZnachenya)){
//                     students += subZnachenya.length
//                 for (let i = 0; i < subZnachenya.length; i++){
//                 total += subZnachenya[i].progress
//             }
//                 }
//             }
//             }
//         }
    

//     return total / students
// }
// console.log(gTPBI(students))


function gTPBRecursion(data){
    if(Array.isArray(data)){
        let tot = 0
        for (let i = 0; i < data.length; i++){
            tot +=data[i].progress
        }
        return [tot, data.length]
    } else {
        let total = [0,0]
        for (let subData of Object.values(data)){
            const subDataArr = gTPBRecursion(subData)
            total[0] += subDataArr[0]
            total[1] += subDataArr[1]
        }
        return total
    }
}
const result = gTPBRecursion(students)
console.log(result[0]/result[1])


function factorial(n){
    if(!Number.isInteger(n)){
         return "Ошибка, проверьте данные";
    }

    if(n >=1){
        return n*factorial(n-1)
    } else {
        return 1
    }
}

console.log(factorial(5))