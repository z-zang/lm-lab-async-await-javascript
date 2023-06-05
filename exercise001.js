const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	// console.log(`randomInt: ${randomInt}`) // used this to check answer
	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});

// Your solution(s) to exercise001 here!
promise.then((resolve) => {
	console.log(`Yay! Promise resolved with response: ${resolve}`)
},
(reject) => {
	console.log(`Boo. Promise rejected with response:  ${reject}`)
})