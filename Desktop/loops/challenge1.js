const prompt = require("prompt-sync")();
let a = parseInt(prompt("enter the number for table of multiplication: "));
console.log('table of multiplication of ${a}:');
for (let i = 1; i <=10;i++){
    let result = a * i ;
    console.log(`${a} * ${i} = ${reulst}`);
}