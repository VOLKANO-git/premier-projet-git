const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter a positive integer for a factorial  :"));
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}   console.log(`The factorial of ${n} is: ${factorial}`);