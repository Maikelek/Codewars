# Given an array of ones and zeroes, convert the equivalent binary value to an integer.

def binary_array_to_number(arr):
    index = len(arr)-1
    decimal = 0

    for binary in arr:
        decimal += binary*(2**index)
        index -= 1

    return decimal