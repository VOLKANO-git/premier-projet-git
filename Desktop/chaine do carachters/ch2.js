const prompt=require('prompt-sync');
let text = prompt()('enter a text');
let counter = 0
for ( let caracter of text){counter++}
console.log(`the number of characters in the text is: ${counter}`);