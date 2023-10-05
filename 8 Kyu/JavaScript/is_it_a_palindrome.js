// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
	text = Array.from(x).reverse().join("").toLowerCase()
	if (text == x.toLowerCase()) {
		return true
	}
	else {
		return false
	}
}