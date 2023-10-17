// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
    evenNums = [];
    for (let i = array.length; i >= 0; i--) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i])
        }
        if (evenNums.length === number) {
            break;
        }
    }
    return evenNums.reverse();
  }