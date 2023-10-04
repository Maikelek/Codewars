// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
	let classAverageSum = 0

	for (let i of classPoints) {
		classAverageSum += i
	}

	let classAverage = classAverageSum / classPoints.length

	if (yourPoints > classAverage) {
		return true
	}
	else {
		return false
	}
}