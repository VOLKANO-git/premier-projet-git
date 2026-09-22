const prompt = require ('prompt-sync');
const person = {
    firstname : "anas" ,
    lastname : "laamim",
    notes : [18,12,10,20,15]
}; 
for(let cle in person){
    console.log(cle,person[cle]);
}