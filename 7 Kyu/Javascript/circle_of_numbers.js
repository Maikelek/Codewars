// Consider integer numbers from 0 to n - 1 written down along the circle in 
// such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

function circleOfNumbers(n, number) {
    let half = n/2;
    
    if (number < half) {
        return number + half;
    }
    else {
       return number - half; 
    }
}