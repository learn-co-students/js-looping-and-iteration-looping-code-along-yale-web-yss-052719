// Code your solutions in this file
const cards = (["Ada", "Brendan", "Ali"], "birthday");

function writeCards(cards, eventName) {
  let name = []
  for (let i = 0; i < cards.length; i++) {
    name.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`)
  }

  return name;
}

function countdown(startingNumber) {
//Im defining a new function countdown and taking one argument.
// using a while loop check if our starting number is greater than
// 0, and then each iteration console.log and decrease the starting
//number by 1.
  while (startingNumber >= 0) {
    console.log(startingNumber)
    startingNumber--
  }
}
