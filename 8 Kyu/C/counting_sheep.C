// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

#include <stdbool.h>
#include <stddef.h>

size_t count_sheep(const bool sheep[], size_t count)
{
    int counter = 0;

    for (size_t i = 0; i < count; i++) {
        if (sheep[i] == true) {
            counter++;
        }
    }
        return counter;
}