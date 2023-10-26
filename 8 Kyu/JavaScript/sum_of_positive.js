// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0;
    arr.filter(a => a > 0).map(a => sum += a);
    return sum
}