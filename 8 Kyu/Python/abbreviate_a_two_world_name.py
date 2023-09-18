# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

def abbrev_name(name):
    boxForSpace = False
    text = ""
    index = 0

    for letter in name:
        index += 1

        if index == 1:
            text += letter.upper()
        
        elif letter == " ":
            boxForSpace = True
            
        elif boxForSpace == True:
            text += f".{letter.upper()}"
            boxForSpace = False
    return text