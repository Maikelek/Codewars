// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    const sortedDigits = Array.from(String(n), Number).sort((a, b) => b - a);
    return parseInt(sortedDigits.join(""), 10);
}