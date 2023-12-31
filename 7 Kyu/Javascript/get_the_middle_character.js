// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    const length = s.length;
    let middle;
    
    if (length % 2 == 0) {
        middle = Math.floor(length/2);
        return s[middle-1]+s[middle];   
    } else {
        middle = Math.floor(length/2);
        return s[middle];
    }
}