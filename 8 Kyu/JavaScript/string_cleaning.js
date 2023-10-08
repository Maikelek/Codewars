// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

function stringClean(s){
	text = ""
	for (let i of s) {
		if (/[0-9]/.test(i) ) {
			continue
		}
		else {
			text += i
		}
	}
	return text
  }