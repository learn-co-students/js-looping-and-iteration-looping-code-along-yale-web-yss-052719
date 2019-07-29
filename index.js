// Code your solutions in this file

function writeCards(array, event) {
    let array = []
    for (let i = 0; i < array.length; i++) {   
        array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift.`)
    }
    return array
}

function countdown(num) {
    let i = num;
    while (i > -1) {
        console.log(num);
        i - 1;
    }
}