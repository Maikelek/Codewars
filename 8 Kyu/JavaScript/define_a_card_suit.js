// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
	let lastLetter = card.substring(card.length - 1)
	switch (lastLetter) {
		case "♣":
			return "clubs"
		case "♦":
			return "diamonds"
		case "♥":
			return "hearts"
		case "♠":
			return "spades"
		default:
			return "Wrong card input"
	}
}