const prompt = require('prompt-sync')();
const length = parseInt(prompt('Enter the length of the array: '));
const array = [];

for (let i = 0; i < length; i++) {
    const element = parseInt(prompt(`Enter element ${i + 1}: `));
    array.push(element);
}

console.log('The array is:', array);
