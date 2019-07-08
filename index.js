// Code your solutions in this file

function writeCards(names, event) {
    let message = [];
  for (let i = 0; i < names.length; i++) {
     message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return message; 
}

function countdown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i = i - 1;
    }
}

