


/*
initial try customEvery
*/


//answer is returned true only if everything is even
// function customEvery(array){
//   var answer = true
//   array.forEach(function(i){
//       if(i % 2 != 0){
//         answer = false
//         console.log(answer)
//         return answer
//       }
//   })
//   return answer
// }

/*
improved more abstract version customEvery
with outside function
*/


// var test = function(i){
//   return i % 2 == 0
// }

// var tokenArray = [2,4,6,7]

// function customEvery(array, test){
//   var answer = true
//   for (var i = 0; i <= array.length-1; i++) {
//    if (test(array[i]) == false){
//      answer = false
//      return answer
//    }
//   }
// return answer
// }

// console.log(customEvery(tokenArray,test))

//answer is returned true if at least one item meets condition.

/*CUSTOM SOME*/
//LOST ON THIS ONE TRY AGAIN

// someArray = ["a", "b", "c"]

// var sometest = function(array, x){
//   return array[i] == x
// }

// function customSome(array, test){
//   for (var i = 0; i <array.length; i++) {
//     if(test(array[i]) == true){
//       return true
//     }
//   }
//  return false
// }

// console.log(customSome(someArray, sometest("i", "a")))

/*write a function to see if some
word in an array begins
with the letter "a"*/

// function beginwithA (string){
//  return string.slice(0,1) == "a"

// }

// console.log(["banana", "boat", "cheese", "apple"].some(beginwithA()))




























