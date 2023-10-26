// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    humanCase = "";
    for (letter of string) {
        humanCase += letter === letter.toLowerCase() ? letter : ` ${letter}`
    }
    return humanCase;
}