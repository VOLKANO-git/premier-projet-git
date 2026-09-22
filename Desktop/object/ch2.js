const prompt = require ('prompt-sync');
const person = {
    firstname : "anas" ,
    lastname : "laamim",
    notes : [18,12,10,20,15]
};  console.log(`person : ${person.firstname} ${person.lastname}`);
    console.log("list of notes : " + person.notes.join("  "));