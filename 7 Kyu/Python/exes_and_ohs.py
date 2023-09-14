# Check to see if a string has the same amount of 'x's and 'o's. 
# The method must return a boolean and be case insensitive. The string can contain any char.

def xo(s):
    xka = 0
    ocka = 0
    for letter in s:
        if letter in "xX":
            xka += 1
        elif letter in "oO":
            ocka += 1 

    if xka == ocka:
        return True
    else:
        return False 