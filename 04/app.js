const runTimer = () => {
	console.log(`Initial time: ${(new Date()).toLocaleTimeString()}`)
	let iteration = 0;
	
	const intervalId = setInterval(function(){
	iteration ++;
		console.log((new Date()).toLocaleTimeString());
	if (iteration === 5) {
		clearInterval(intervalId);
		iteration = 0;
	}
}, 5000);
}

runTimer()