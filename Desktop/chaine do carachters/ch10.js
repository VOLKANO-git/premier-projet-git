const prompt = require ('prompt-sync')();
let name = prompt('entrez un chaine');
let souschaine = prompt('entrez une sous chaine');
if (name.includes( souschaine )) {
    console.log('la sous chaine est trouvee');
} else {
    console.log('la sous chaine est nest pas trouvee');
}