// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements.

function solve(arr) {
    
    let solved = [];
    let unique = [];
    
    let highest = 0;
    let smaller = 0;
    
    for (let i = 0; i < arr.length; i++) {
        highest = arr[i];
        
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] > highest) {
                smaller += 1;
            }
        }
        
        if (smaller == 0) {
            solved.push(highest);
            smaller = 0;
        }
        else {
            smaller = 0;
        }
    }
    
    solved.push(highest);
    
    for (num of solved) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    
    return unique;
}
