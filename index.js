// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      // i = 0 is the initialization, i < names.length is condition, i++ is the iteration
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      // loop body
    }
    return messages
}

function countdown(num) {
  let countdown = 10;
  // initialization, starting at 10
  while (countdown >= 0) {
    // when num is greater or equal to 0, print num
    console.log(countdown--);
  }
}
