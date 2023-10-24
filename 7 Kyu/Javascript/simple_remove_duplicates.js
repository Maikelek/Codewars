// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

function solve(arr) {
    const uniqueValues = [];
    const indexes = {};
  
    for (let i = arr.length - 1; i >= 0; i--) {
      const element = arr[i];
      if (indexes[element] === undefined) {
        uniqueValues.push(element);
        indexes[element] = i;
      }
    }
  
    return uniqueValues.reverse();
  }
  