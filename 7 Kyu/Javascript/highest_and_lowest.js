// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    let arr = numbers.split(" ").map(a => parseInt(a));
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}