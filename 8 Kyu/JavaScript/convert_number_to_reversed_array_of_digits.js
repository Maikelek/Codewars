// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
	let array = Array.from(String(n), Number);  // Makes array
	array = array.reverse() //Reverses
	
	return array

  }