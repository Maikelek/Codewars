// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
	
	let doubled = ""

	for (let i of str ) {
		x = i;
		doubled += i + x;
	}

	return doubled
  }