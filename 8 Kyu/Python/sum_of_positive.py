# You get an array of numbers, return the sum of all of the positives ones.

def positive_sum(arr):
    sum = 0
    for number in arr:
        if number <= 0:
            pass
        else:
            sum += number
    return sum