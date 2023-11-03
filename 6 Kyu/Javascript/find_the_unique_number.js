// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    const uniqueNumber = arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
    return uniqueNumber;
}