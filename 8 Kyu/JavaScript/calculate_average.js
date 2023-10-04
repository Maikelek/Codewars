// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {

	if (array.length === 0) {
		return 0
	} else {
		let sum = 0;

		for (let x of array) {
			sum += x; 
		}

		return (sum/array.length);
	}

} 