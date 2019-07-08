// Code your solutions in this file
function writeCards(array, event) {
    let cards = [];
    for (let index = 0; index < array.length; index++) {
        cards[index] = `Thank you, ${array[index]}, for the wonderful ${event} gift!`;
    }
    return cards
}

function countdown(number) {
    while (number > -1) {
        console.log(number)
        number -= 1
    }
}