const  prompt = require('prompt-sync')();
const n = parseInt(prompt('Entrez un nombre : '), 10);  

  const nombresImpairs = [];
  for (let i = 0; i < n; i++) { 
    nombresImpairs.push(2 * i + 1); 
  }

  console.log(`Les ${n} premiers nombres impairs sont : ${nombresImpairs.join(', ')}`);
