// let text = "Hellow World!";
// let text2 = "Welcome";

// let num = 20;

// showFirstMessage(text2,text2);
// function showFirstMessage(arg, arg2){
//     console.log(num);
//     num = 15;
// }

//     console.log(num);


// console.log(calc(1,2))

// function calc(a,b){
//     return a+b;
// }


 
// function ret(){
//     let num = 50;
   
//     return ret
// }


// const another = ret()
// const an = another()
// console.log(an)
// console.log(typeof(another))

// const logger = function(){
//     console.log("Hello");
// };

// logger();

// let a = 1;
// let b = 2;
// const calc = (a,b) => { return a+b};
// console.log(calc(a,b))

// const larCurr = 32;
// const usdCurr = 92;
// const euroCurr = 98;
// const discount = 0.9;

// function convert(amount, curr){
//     // console.log(amount / curr);
//     return amount / curr;
// }

// function promotion(arg){
//     console.log(arg * discount);
// }

// let lar = convert(100, larCurr);
// let usd = convert(100, usdCurr);
// let euro = convert(100, euroCurr);

// promotion(lar);
// promotion(usd);
// promotion(euro)

// function test(){
//    for(let i = 0; i < 5; i++){
//     console.log(i);
//     if (i === 3) return
//    } 
//    console.log("Done");
// }
// test();

// function doNothing(){};
// console.log(doNothing() === undefined);
// function plusMinus (n){
//    return [n-1,n,n+1]
// }
// plusMinus(5)


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';
    
//     for (let i = 1; i <= times; i++) {
//        if (i === times) {
//           str += `${num * i}`;
//           // Тут без черточек в конце
//          } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//          }
//       }
      
//     return str;
// }

// getMathResult(3, 20);