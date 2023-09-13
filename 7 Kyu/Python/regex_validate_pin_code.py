# ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
# If the function is passed a valid PIN string, return true, else return false.

def validate_pin(pin):
    pin = str(pin)
    sum = 0
    for number in pin:
        if number.isdigit():
            sum += 1
        else:
            return False
    if sum == 4 or sum == 6:
        return True
    else:
        return False 