# Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

def flatten_and_sort(array):
    num = []
    
    for arr in array:
        for number in arr:
            num.append(number)
    num.sort()
    return num