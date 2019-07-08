// // Code your solutions in this file
 
function writeCards(gifts, str) {
    let arr =[]
  for (let i = 0; i < gifts.length; i++) {
    arr.push(`Thank you, ${gifts[i]}, for the wonderful ${str} gift!`);
  };
  return arr;
}

function countdown(int) {

    while (0 < int){
        console.log(int);
        int-=1
    }
    console.log(int);
}
