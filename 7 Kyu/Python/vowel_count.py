# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    vowels = "aeiou"
    sum = 0
    for letter in sentence:
        if letter in vowels:
            sum += 1
        else:
            pass
    return sum