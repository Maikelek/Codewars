// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let word_split = s.split(' ')
    let word_length = [];
    
    for (word of word_split) {
        word_length.push(word.length);
    }
    
    return Math.min(...word_length);
}