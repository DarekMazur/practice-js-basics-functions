const randomNumber = Math.round(Math.random() *  10);

const factorial = function (randomNumber) {
	let factorial = 0
	
	for (let i = 0; i <= randomNumber; i++) {
		factorial = factorial + i
	}
	
	return factorial
}

console.log(factorial(randomNumber))