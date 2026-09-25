const promptSync = require('prompt-sync')();
let candidats = [];

// 1. Ajouter un nouveau candidat

function creerCandidat(cin, nom, prenom, partiPolitique, age) {
  const candidat = {
    cin: cin,
    nom: nom,
    prenom: prenom,
    partiPolitique: partiPolitique,
    age: age,
    electeurs: [],
  };
  return candidat;
}
function trouverCandidatParCin(cin) {
  
  const trouve = candidats.find((candidat) => candidat.cin === cin);
  if (trouve === undefined) {
    return null;
  }
  return trouve;
}
function ajouterCandidat() {
  console.log("\n--- Ajouter un nouveau candidat ---");

  const cin = await poserQuestion("CIN du candidat : ");

  if (trouverCandidatParCin(cin) !== null) {
    console.log("Un candidat avec ce CIN existe déjà !");
    return;
  }
  const nom = await poserQuestion("Nom : ");
  const prenom = await poserQuestion("Prénom : ");
  let partiPolitique = await poserQuestion(
    "Parti politique (laisser vide pour Indépendant) : "
  );
  if (partiPolitique === "") {
    partiPolitique = "Indépendant";
  }
  const ageTexte = await poserQuestion("Âge : ");
  const age = Number(ageTexte);

  const candidat = creerCandidat(cin, nom, prenom, partiPolitique, age);
  candidats.push(candidat);

  console.log(`Candidat ${prenom} ${nom} ajouté avec succès !`);
}

function afficherMenu() {
  console.log("\n========== MENU PRINCIPAL ==========");
  console.log("1. Ajouter un nouveau candidat");
  console.log("2. Ajouter plusieurs candidats");
  console.log("3. Afficher la liste des candidats");
  console.log("4. Voter pour un candidat");
  console.log("5. Modifier les informations d'un candidat");
  console.log("6. Supprimer un candidat");
  console.log("7. Rechercher des candidats");
  console.log("8. Statistiques de l'élection");
  console.log("0. Quitter");

}
