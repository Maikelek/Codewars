# Complete the solution so that the function will break up camel casing, using a space between words.

def solution(s):
    string = ""
    for letter in s:
        if letter.islower():
            string += letter
        elif letter.isupper():
            string += " " + letter 
    
    return string