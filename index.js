import { write } from "fs";

// Code your solutions in this file

function writeCards(array, event) {
    let a = []
    for (let i=0; i < array.length; i++) {
        a.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return a
}

function countdown(integer) {
    let i=integer;
    while (i>-1) {
        console.log(i);
        i--;
    }
}