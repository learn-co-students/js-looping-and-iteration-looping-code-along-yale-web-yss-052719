// Code your solutions in this file


function countdown(){
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown)
    countdown -= 1
  }
}

function writeCards(){
  const names = ['Lisa', 'Kaitlin', 'Jan']
  const card_array = []
  for (let i = 0; i < names.length; i++) {
    card_array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return card_array
}
