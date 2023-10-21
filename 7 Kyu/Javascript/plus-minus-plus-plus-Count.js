// Count how often sign changes in array.

function catchSignChange(arr) {
    let currentOP = arr[0] >= 0 ? "+" : "-";
    let currentNum = null;
    let counter = 0;
    
    for (let i = 1; i < arr.length; i++) {
        currentNum = arr[i] >= 0 ? "+" : "-";
        if (currentOP !== currentNum) {
            counter++;
            currentOP = arr[i] >= 0 ? "+" : "-";
        }
    }
    
    return counter
    
}