// Code your solutions in this file

function writeCards(recipients, occasion) {
    let returnArray = []
    for(let i=0; i<recipients.length;i++) {
        returnArray.push(`Thank you, ${recipients[i]}, for the wonderful ${occasion} gift!`)
    }
    return returnArray
}

function countdown(begin) {
    let i = begin
    while(i>=0) {
        console.log(i)
        i--
    }

}