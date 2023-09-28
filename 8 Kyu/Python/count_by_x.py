# Create a function with two arguments that will return an array of the first n multiples of x.
# Assume both the given number and the number of times to count will be positive numbers greater than

def count_by(x, n):
    list = []
    for i in range(1, n+1):
        temp = i*x
        list.append(temp)
    return list
    