// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

#include <stdio.h>

int sum(const int numbers[], int length) {
    if (!numbers) {
        return 0;
    }
    int min = numbers[0];
    int max = numbers[0];
    int sum = 0;
    int counter = 0;
    
    for (int i = 0; i < length; i++) {
        counter += 1;
        if (min > numbers[i]) {
            min = numbers[i];
        }
        
        if (max < numbers[i]) {
            max = numbers[i];
        }
        
        sum += numbers[i];
    }
    
    if (counter <= 2) {
        return 0;
    }
    return sum-min-max;
}