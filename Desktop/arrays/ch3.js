const prompt = require('prompt-sync')();
let somme = 0;
for (let i = 0; i < 3; i++) {
  const num = parseInt(prompt(`Enter number ${i + 1}: `));
  somme += num;
}
console.log('The sum is:', somme);