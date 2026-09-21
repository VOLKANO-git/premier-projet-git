const prompt = require('prompt-sync');
const text = "abcd";
let result = "";
for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
}
console.log(result);