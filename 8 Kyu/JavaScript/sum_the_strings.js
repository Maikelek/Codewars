// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a, b) {
    const numA = parseInt(a) || 0;
    const numB = parseInt(b) || 0;
  
  
    const sum = (numA + numB).toString();
  
    return sum;
}