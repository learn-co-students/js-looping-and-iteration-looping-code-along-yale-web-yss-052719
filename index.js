// Code your solutions in this file
function writeCards(names , message)
{
let i = 0
let cards = [];

while ( i < names.length)
{
    debugger;
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    i++

}
    debugger;
    return cards;
}


function countdown(start)
{
    while ( start > -1 )
    {
        console.log(start)
        start--
    }
}