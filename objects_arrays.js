// DEEP EQUAL

var obj = {here: {is: "an"}, object:2, nothere: "nope!"};
var obj2 = {here: {is: "an"}, object:2, nothere: "nope!"};

// console.log(deepEqual(obj, obj2));

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


//ARRAY TO LINKED LIST

var testArg = [1,2,3]

el = 10

list = {value:undefined, rest:{ } }

function prepend(el, list){
  var newList = {
    value: el,
    rest: list
  }
  return newList;
}

function arrayToList(array){
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
};

function listToArray(list){
  var myArray = [];
  for (var node = list; node; node = node.rest) {
    myArray.push(node.value);
  }
  return myArray;
}

// console.log(listToArray({value: 10, rest: {value: 20, rest: null}}))


var myList = {value: 10, rest: {value: 20, rest: null}};

function nth(list, index){
  if(!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n-1)
}

console.log(arrayToList([10, 20, 30]))
















