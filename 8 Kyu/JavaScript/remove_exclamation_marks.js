// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => {

	let string = ""

	for (let i of s ) {
		if (i === "!") {
			continue
		} else {
			string += i
		}
	}
	return string
  }