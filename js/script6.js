// for (let i = 0; i < 3; i++){
//     console.log("i"+i);
//     for (let j = 0; j < 3; j++){
//     console.log(j);
//     }
// }


// let result = '';
// const etaj = 10;

//  s: for (let i = 1; i < 3; i++){
//     console.log(`1 uroven =  ${i}`);
    
//     f: for (let okna = 0; okna < 3; okna++){
//         console.log(`2 uroven =  ${okna}`);
//            if (okna === 1) continue s; 


//          for (let tri = 0; tri < 3; tri++){
//            if (tri === 2) continue f; 
//             console.log(`3 uroven =  ${tri}`);
//         } 
        
//         // result += "-";
//     } 
    
//     // result +="\n";
// }




// console.log(result);

//  for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }

    // let i = 2;

    // while (i <= 16) {
    //     if (i % 2 === 0) {
    //         i++;
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    //     i++;
    // }

    // function fifthTask() {
    // const arrayOfNumbers = [];

    // for (let i = 5; i < 11; i++) {
    //     arrayOfNumbers[i - 5] = i;
    // }

    // console.log(arrayOfNumbers);
    // return arrayOfNumbers;
    // }

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for (let i = 0; i < arr.length; i++){
    //     result[i] = arr[i]
    // }
    // console.log(result);
    // return result;
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for(let i = 0; i < data.length; i++){
//     if (typeof(data[i]) === "number"){
//     data[i] *=2;
//     } else if (typeof(data[i]) === "string"){
//     data[i] += "- done"; 
//     }
// }
// console.log(data);



//  const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - (i+1)]
//     }

//     console.log(result);
//     return result;






const etaj = 72;
let result = '';

 for (let i = 0; i <= etaj; i++){
    
    for (let okna = 0;   okna < etaj - i; okna++){
         result += " ";
        } 

    for (let okna = 0; okna < 2 * i + 1; okna++){
        result += "-";
    } 
    
    result +="\n";
}

console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)