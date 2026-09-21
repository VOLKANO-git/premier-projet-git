const prompt = require('prompt-sync');
let text = prompt()('enter a text');
let counter = 0
for (let caracther  of text){counter++};
console.log(`the number of carachter in the text is: ${counter}`);