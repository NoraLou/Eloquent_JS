


/*
initial try customEvery
*/


//answer is returned true only if everything is even
function customEvery(array){
  var answer = true
  array.forEach(function(i){
      if(i % 2 != 0){
        answer = false
        console.log(answer)
        return answer
      }
  })
  return answer
}

/*
improved more abstract version customEvery
with outside function
*/


var test = function(i){
  return i % 2 == 0
}

var tokenArray = [2,4,6,7]

function customEvery(array, test){
  var answer = true
  for (var i = 0; i <= array.length-1; i++) {
   if (test(array[i]) == false){
     answer = false
     return answer
   }
  }
return answer
}

// console.log(customEvery(tokenArray,test))

//answer is returned true if at least one item meets condition.

/*CUSTOM SOME*/

someArray = ["a", "b", "c"]

function customSome(array, value){
  var someAnswer = false
  array.forEach(function(i){
    if( i === value){
      someAnswer = true
      return someAnswer
    }
  })
  return someAnswer
}
// console.log(customSome(someArray, "e"))


/*write a function to see if some
word in an array begins
with the letter "a"*/

function beginwithA (string){
 var testString = string.slice(0,1)
 return testString == "a"
}

//console.log(beginwithA("apple"))


console.log(["banana", "boat", "cheese", "apple"].some(beginwithA))




























