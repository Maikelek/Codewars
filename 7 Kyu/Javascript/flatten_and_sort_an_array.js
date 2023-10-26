// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
    let sorted = [];
    
    for (arr of array) {
        for (num of arr) {
            sorted.push(num)   
        }
    }
    
    return sorted.sort((a, b) => a - b);
}