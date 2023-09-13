# Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

def capitals(word):
    positions = []
    count = 0 
    for letter in word:
        if letter.isupper():
            positions.append(count)
        count += 1
    return positions