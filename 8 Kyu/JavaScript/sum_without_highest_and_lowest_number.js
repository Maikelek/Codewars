// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

function sumArray(array) {
    if (!array || array.length <= 2) return 0;
    let min = array.indexOf(Math.min(...array));
    let max = array.indexOf(Math.max(...array));
  
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) { 
        if (i == min || i == max) {
            continue;
        }
        sum += array[i];
    }
    return sum;
  }