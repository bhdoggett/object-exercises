/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. 
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:
*/

function fromListToObject(array) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    result[key] = value;
  }
  return result;
}

// const myArray = [
//   ["name", "Ben"],
//   ["hobby", "music"],
//   ["favorit-board-game", "setterls-of-catan"],
// ];

// console.log(fromListToObject(myArray));
