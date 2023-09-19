# Complete the square sum function so that it squares each number passed into it and then sums the results together.

def square_sum(numbers):
    sum = 0
    for number in numbers:
        root = number**2
        sum += root
    return sum