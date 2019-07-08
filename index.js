// Code your solutions in this file
function writeCards(names, event) {
	let messages = [];
	for (let i = 0; i < names.length; i++) {
		messages[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}

	return messages;
}

function countdown(num) {
	for (let countdown = num; countdown > 0; countdown--){
		console.log(countdown);
	}
	console.log(0);
}