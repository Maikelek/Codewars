// Task
// Given a string str, reverse it and omit all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    let arr = str.split("").reverse();
    let char = "";
    let string = "";
    
    for (let i = 0; i < arr.length; i++) {
        char = arr[i].charCodeAt();
        string += (char >= 65 && char < 91) || (char >= 97 && char < 123) ? String.fromCharCode(char) : "";
    }
    return string;
  }