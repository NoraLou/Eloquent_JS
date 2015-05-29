//program structure

// function chessBoard(size){
//   for(var i = 0; i <size; i++){
//     if(i % 2 === 0){
//       console.log( " " + Array(size).join(" # "));
//     }else{
//     console.log(Array(size).join(" # "));
//     }
//   }
// };

// chessBoard(12)

//**********************************************FUNCTIONS


// function min(arg1, arg2){
//   if (arg1 == arg2){
//     return null
//   }else if(arg1 < arg2){
//     return arg1
//   }else{
//     return arg2
//   }
// }

// console.log(min(5,2));


// zero is even
// one is odd
// for any number N eveness same as N-2

// function isEven(number){
//     if(number < 0){
//       number = (Math.ceil(Math.abs(number)))
//       return isEven(number)
//     }
//     else if(number === 0){
//       return true
//     }else if(number === 1){
//       return false
//     }else{
//       number = number - 2
//       return isEven(number)
//     }
// };

// console.log(isEven(50));

// console.log(isEven(75));

// console.log(isEven(-4));


// function countBs(string){
//   var bCount = 0;
//   for(i = 0; i < string.length; i ++)
//     if(string.charAt(i) == "B"){
//       bCount++
//     }
//   return bCount;
// }

// console.log(countBs("BBC"));

// function countChar(string, targetChar){
//     var charCount = 0;
//     for(i =0; i <string.length; i ++)
//       if(string.charAt(i) == targetChar){
//         charCount++
//       }
//     return charCount;
// }

// // console.log(countChar("Mama","M"));

// function countBs(string){
//    var targetChar = "B"
//    return countChar(string, targetChar)
// }


// console.log(countBs("Bahamas"));

//******************************************************OBJECTS AND DATA STRUCTURES//

// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

// function range(start, end){
//   if(arguments.length < 2){
//     end = start;
//     start = 0;
//   }
//   var rangeArray = [];
//   for(var i = start; i <= end; i ++){
//     rangeArray.push(i);
//   }
//   return rangeArray;
// }

// function sumArray(array){
//   var arraySum = 0;
//   for(var i = 0; i < array.length; i++){
//     arraySum += array[i]
//   }
//   return arraySum;
// }

// console.log(range(1,10));


// console.log(sumArray((range(1,10))));


// As a bonus assignment, modify your range function to take an optional
// third argument that indicates the “step” value used to build up the array. I
// f no step is given, the array elements go up by increments of one, corresponding to the old behavior.
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


// function stepRange(start, end, step){
//   var rangeArray = [];
//   if(arguments.length < 2){
//     end = start;
//     start = 0;
//   }
//   if(arguments.length > 2){
//     step = arguments[2]
//   }else{
//     step = 1
//   }
//   if(step >= 1 ){
//     for(var i = start; i<= end; i = i + step){
//       rangeArray.push(i);
//     }
//   }else{
//     for(var i = start; i >= end; i = i + step){
//       rangeArray.push(i);
//       }
//     }
//   return rangeArray
// }


// console.log(stepRange(1,7,3))

// console.log(stepRange(5, 2, -1))

//BONUS -- BONUS!!! write as a switch-case; in a more elegant manner

// tropical = ["monkey", "banana", "conch", "papaya"]

 // reverseArray,
 // takes an array as argument and produces a
 // new array that has the same elements in the inverse order.

// function reverseArray(array){
//   var newarrayReversed = [];
//   for(i = 0; i < array.length; i++){
//     newarrayReversed.unshift(array[i]);
//   }
//   return newarrayReversed
// }

// console.log(reverseArray(tropical));

// reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument in order to reverse its elements.


////////////////////////////////////////////////////////////////////////////HIGHER ORDER FUNCTIONS

//Use the reduce method in combination with the concat method to “flatten” an array of arrays
//into a single array that has all the elements of the input arrays.

// var myArray = [[1, 2, 3], [4, 5], [6]];


// console.log(myArray.reduce(function(a,b){
//   return a.concat(b);
// }))




































