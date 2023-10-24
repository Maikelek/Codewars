// Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. 
// Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.

function bubblesortOnce(a) {
    const arrLen = a.length;
    
    for (let i = 0; i < arrLen-1; i++) {
        
        if (a[i] > a[i+1]) {
            let temp = a[i];
            a[i] = a[i+1];
            a[i+1] = temp;
        }
    }
    
    return a;
  
}