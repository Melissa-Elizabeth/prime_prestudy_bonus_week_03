function add(Number) {
	Number += 2;
	return Number;
}

function multiply(Number) {
	Number *= 3;
	return Number;
}

function subtract(Number) {
	Number -= 3;
	return Number;
}

var newNumber = add(muliply(subtract(6)));{
	console.log(newNumber)
	}
