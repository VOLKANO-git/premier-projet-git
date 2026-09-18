const prompt  = require('prompt-sync') ();
let n = parseInt(prompt("Entrez le nombre de la table souhaitée: "));   
let affichage = 5
for (let i = 10; i >= 1; i--) {
let resultat = n * i;   
console.log(`${n} * ${i} = ${resultat}`); 
}  
