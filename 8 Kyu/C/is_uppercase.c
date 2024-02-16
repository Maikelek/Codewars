//Create a method to see whether the string is ALL CAPS.

#include <stdbool.h>
#include <stdio.h>
#include <ctype.h>

bool is_all_caps(const char *str) {
    while (*str) {
        if (isalpha(*str) && !isupper(*str)) {
            return false;
        }
        str++;
    }
    return true;
}
