# Write a function that returns both the minimum and maximum number of the given list/array.

def min_max(lst):
    minMax = []
    lst.sort()
    biggest = len(lst) - 1
    minMax.append(lst[0])
    minMax.append(lst[biggest])
    return minMax