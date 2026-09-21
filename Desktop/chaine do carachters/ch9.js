const prompt = require ('prompt-sync');
const withespace = 'bonjour a tout le monde';
let resultat = "";
for (let i = 0; i < withespace.length; i++) {
    if (withespace[i] !== " ") {
        resultat += withespace[i];
    }
}
console.log(resultat); 