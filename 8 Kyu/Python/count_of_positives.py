# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

def count_positives_sum_negatives(arr):
    positiveCount = 0
    sumNegative = 0
    arrayEnd = []

    for number in arr:
        if number >= 1:
            positiveCount += 1
        elif number <= -1:
            sumNegative += number
        else:
            pass

    if positiveCount > 0 and sumNegative < 0:
        arrayEnd.append(positiveCount)
        arrayEnd.append(sumNegative)
        return arrayEnd
    elif not arr:
        return arrayEnd
    else:
        arrayEnd.append(positiveCount)
        arrayEnd.append(sumNegative)
        return arrayEnd