const prompt = require('prompt-sync')();
let text = prompt('enter a text: ');
let counter = 0;

for (let i = 0; i < text.length; i++) {
    counter = counter + 1;
}

console.log(`There are ${counter} letters in ${text}`);