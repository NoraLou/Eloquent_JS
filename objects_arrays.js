
//My function
// function deepEqual(valOne, valTwo){
//   var answer = false;
//   //if they are both values that are equal
//   if(valOne === valTwo){
//     answer = true
//     return answer
//   }
//   if(typeof valOne === "object" && valOne!= null
//     && typeof valTwo === "object" && valTwo != null ){
//       console.log("pass")

//       if(Object.keys(valOne).length == Object.keys(valTwo).length){
//         console.log("passAgain")
//           for(prop in valOne){
//             if(!valTwo[prop]){
//               return answer
//             }
//           }

//           for(prop in valOne){
//             if(valOne[prop] == valTwo[prop]){
//               answer = true
//               return answer
//             }else{
//               return answer
//             }
//           }

//       }else{
//         return answer
//       }

//   }else{
//     return answer
//   }

//   return answer
// }

//WHY DOES THIS NOT WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var obj = {here: {is: "an"}, object:2, nothere: "nope!"};
var obj2 = {here: {is: "an"}, object:2, nothere: "nope!"};

console.log(deepEqual(obj, obj2));


//Refactoring to make more sense:

//check if they are values that are equal

//check if they are null, or not an object

//if they are an object
  //check the number of properties

  //check if the property has the same value



function deepEqual(valOne, valTwo){

  if(valOne === valTwo){
   return true;
  }

  if( valOne == null || typeof valOne != "object" ||
      valTwo == null || typeof valTwo != "object"){
    return false
  }

  if(Object.keys(valOne).length != Object.keys(valTwo).length){
    return false
  }

  for(prop in valOne){
    if(!valTwo[prop])
      return false
  }

  for(prop in valOne){
    if(valOne[prop] != valTwo[valOne[prop]])
      return false
  }


return true
}














