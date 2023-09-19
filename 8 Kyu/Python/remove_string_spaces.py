# Write a function that removes the spaces from the string, then return the resultant string.

def no_space(text):
    answer = ""
    for letter in text:
        if letter == " ":
            continue
        answer += letter
    return answer 