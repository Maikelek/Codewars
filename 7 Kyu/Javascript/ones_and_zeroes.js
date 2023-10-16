// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
    index = arr.length-1;
    decimal = 0;

    for (binary of arr){ 
        decimal += binary*(2**index)
        index -= 1;
    }
    return decimal;
};