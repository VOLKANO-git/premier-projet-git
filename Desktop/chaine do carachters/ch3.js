const prompt = require('prompt-sync');
const text1 = prompt()('enter the first text');
const text2 = prompt()('enter the second text');
const result = text1.concat(text2);
console.log("resultant channel:"+result);