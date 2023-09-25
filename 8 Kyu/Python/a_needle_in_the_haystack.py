# Can you find the needle in the haystack?

def find_needle(haystack):
    index = 0

    for item in haystack:
        if item == "needle":
            return f"found the needle at position {index}"
        index += 1
        if "needle" not in haystack:
            return f"There is no needle in haystack"
            