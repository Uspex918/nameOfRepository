// const obj = {
//     a: 5,
//     b: 1
// }

// // console.log(obj)

// function copy(mO){
//     let objCopy = {}
    
//     let key
//     for(key in mO){
//         objCopy[key] = mO[key]
//     }
//     return objCopy
// }


// const newNumbers = copy(numbers)

// newNumbers.c.x = 10

// // console.log(numbers)
// // console.log(newNumbers)

// const add = {
//     d: 17,
//     e: 20
// }
// let ass = Object.assign(numbers, add)
// let ass2 = Object.assign({}, add)
// ass2.d = 30
// // console.log(ass)
// // console.log(ass2)

// const oldArr = ["a", "b", "c"]
// const newArr = oldArr.slice()
// newArr[2] = "madagascar"
// // console.log(oldArr)
// // console.log(newArr)

// const video = ["youtube", "vimeo", "rutube"]
// const blogs = ["wordpress", "livejournal", "blogger"]
// const internet = [...video, ...blogs, "vk", "facebook"]

// console.log(internet)

// function log(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// const num = [2,5,7]
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }
// console.log(...Object.entries(numbers))
// const n = {...numbers}
// n.a = 5

// console.log(numbers)
// console.log(n)
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(la) {
//             str += `${la.toUpperCase()} `;
//         });
//             console.log(str)
//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));