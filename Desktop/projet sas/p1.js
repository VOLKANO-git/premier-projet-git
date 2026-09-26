const prompt = require('prompt-sync')();


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

  const cin = prompt("CIN du candidat : ").trim();

  if (trouverCandidatParCin(cin) !== null) {
    console.log("Un candidat avec ce CIN existe déjà !");
    return;
  }

  const nom = prompt("Nom : ").trim();
  const prenom = prompt("Prénom : ").trim();
  let partiPolitique = prompt("Parti politique (laisser vide pour Indépendant) : ").trim();
  if (partiPolitique === "") {
    partiPolitique = "Indépendant";
  }
  const ageTexte = prompt("Âge : ").trim();
  const age = Number(ageTexte);

  const candidat = creerCandidat(cin, nom, prenom, partiPolitique, age);
  candidats.push(candidat);

  console.log(`Candidat ${prenom} ${nom} ajouté avec succès !`);
}


// 2. Ajouter plusieurs candidats à la fois


function ajouterPlusieursCandidats() {
  console.log("\n--- Ajouter plusieurs candidats ---");

  const nombreTexte = prompt("Combien de candidats voulez-vous ajouter ? ").trim();
  const nombre = Number(nombreTexte);

  for (let i = 0; i < nombre; i++) {
    console.log(`\nCandidat ${i + 1} sur ${nombre} :`);
    ajouterCandidat();
  }

  console.log(`\n${nombre} candidat(s) traité(s).`);
}

 
// 3. Afficher la liste des candidats


function compterVotes(candidat) {
  return candidat.electeurs.length;
}

function afficherUnCandidat(candidat) {
  console.log(
    `CIN: ${candidat.cin} | Nom: ${candidat.nom} | Prénom: ${candidat.prenom} | ` +
      `Parti: ${candidat.partiPolitique} | Âge: ${candidat.age} | Votes: ${compterVotes(candidat)}`
  );
}

function afficherTableauDeCandidats(tableau) {
  if (tableau.length === 0) {
    console.log("Aucun candidat à afficher.");
    return;
  }

  tableau.forEach((candidat) => {
    afficherUnCandidat(candidat);
  });
}

function afficherListeCandidats() {
  console.log("\n--- Afficher la liste des candidats ---");
  console.log("1. Afficher tous les candidats");
  console.log("2. Trier par nombre de votes (décroissant)");
  console.log("3. Filtrer par parti politique");

  const choix = prompt("Votre choix : ").trim();

  if (choix === "1") {
    afficherTableauDeCandidats(candidats);
  } else if (choix === "2") {
    const candidatsTries = candidats.slice();
    candidatsTries.sort((a, b) => compterVotes(b) - compterVotes(a));
    afficherTableauDeCandidats(candidatsTries);
  } else if (choix === "3") {
    const parti = prompt("Nom du parti politique recherché : ").trim();

    const candidatsFiltres = candidats.filter(
      (candidat) => candidat.partiPolitique.toLowerCase() === parti.toLowerCase()
    );
    afficherTableauDeCandidats(candidatsFiltres);
  } else {
    console.log("Choix invalide.");
  }
}


// 4. Voter pour un candidat


function electeurADejaVote(cinElecteur) {
  for (const candidat of candidats) {
    if (candidat.electeurs.includes(cinElecteur)) {
      return true;
    }
  }
  return false;
}

function voterPourUnCandidat() {
  console.log("\n--- Voter pour un candidat ---");

  const cinElecteur = prompt("Votre CIN : ").trim();

  if (electeurADejaVote(cinElecteur)) {
    console.log(
      "Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau"
    );
    return;
  }

  const cinCandidat = prompt("CIN du candidat pour qui vous votez : ").trim();
  const candidat = trouverCandidatParCin(cinCandidat);

  if (candidat === null) {
    console.log("Ce candidat n'existe pas.");
    return;
  }

  candidat.electeurs.push(cinElecteur);
  console.log(`Merci ! Votre vote pour ${candidat.prenom} ${candidat.nom} a été enregistré.`);
}


// 5. Modifier les informations d'un candidat


function modifierCandidat() {
  console.log("\n--- Modifier les informations d'un candidat ---");

  const cin = prompt("CIN du candidat à modifier : ").trim();
  const candidat = trouverCandidatParCin(cin);

  if (candidat === null) {
    console.log("Ce candidat n'existe pas.");
    return;
  }

  console.log("1. Modifier le parti politique");
  console.log("2. Modifier l'âge");
  const choix = prompt("Votre choix : ").trim();

  if (choix === "1") {
    const nouveauParti = prompt("Nouveau parti politique : ").trim();
    candidat.partiPolitique = nouveauParti;
    console.log("Parti politique mis à jour.");
  } else if (choix === "2") {
    const nouvelAgeTexte = prompt("Nouvel âge : ").trim();
    candidat.age = Number(nouvelAgeTexte);
    console.log("Âge mis à jour.");
  } else {
    console.log("Choix invalide.");
  }
}


// 6. Supprimer un candidat


function supprimerCandidat() {
  console.log("\n--- Supprimer un candidat ---");

  const cin = prompt("CIN du candidat à supprimer : ").trim();

  let index = -1;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cin) {
      index = i;
    }
  }

  if (index === -1) {
    console.log("Ce candidat n'existe pas.");
    return;
  }

  const supprime = candidats.splice(index, 1);
  console.log(`Candidat ${supprime[0].prenom} ${supprime[0].nom} supprimé.`);
}


// 7. Rechercher des candidats


function rechercherCandidats() {
  console.log("\n--- Rechercher des candidats ---");
const nomRecherche = prompt("Nom recherché : ").trim();

  const resultats = candidats.filter(
    (candidat) => candidat.nom.toLowerCase().includes(nomRecherche.toLowerCase())
  );

  afficherTableauDeCandidats(resultats);
}// 8. Statistiques de l'élection


function afficherStatistiques() {
  console.log("\n--- Statistiques de l'élection ---");

  console.log(`Nombre total de candidats : ${candidats.length}`);

  let totalVotes = 0;
  for (let i = 0; i < candidats.length; i++) {
    totalVotes += compterVotes(candidats[i]);
  }
  console.log(`Nombre total de votes exprimés : ${totalVotes}`);

  const candidatsTries = candidats.slice();
  candidatsTries.sort((a, b) => compterVotes(b) - compterVotes(a));
  console.log("Top 3 des candidats :");
  const top3 = candidatsTries.slice(0, 3);
  if (top3.length === 0) {
    console.log("  Aucun candidat.");
  } else {
    for (let i = 0; i < top3.length; i++) {
      console.log(`  ${i + 1}. ${top3[i].prenom} ${top3[i].nom} - ${compterVotes(top3[i])} votes`);
    }
  }

  const compteurParParti = {};
  for (const candidat of candidats) {
    const parti = candidat.partiPolitique;
    if (compteurParParti[parti] === undefined) {
      compteurParParti[parti] = 0;
    }
    compteurParParti[parti] = compteurParParti[parti] + 1;
  }

  console.log("Nombre de candidats par parti politique :");

  for (const parti in compteurParParti) {
    console.log(`  ${parti} : ${compteurParParti[parti]}`);
  }
}


// Menu principal


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
  console.log("=====================================");
}

function demarrer() {
  let continuer = true;

  while (continuer) {
    afficherMenu();
    const choix = prompt("Votre choix : ").trim();

    if (choix === "1") {
      ajouterCandidat();
    } else if (choix === "2") {
      ajouterPlusieursCandidats();
    } else if (choix === "3") {
      afficherListeCandidats();
    } else if (choix === "4") {
      voterPourUnCandidat();
    } else if (choix === "5") {
      modifierCandidat();
    } else if (choix === "6") {
      supprimerCandidat();
    } else if (choix === "7") {
      rechercherCandidats();
    } else if (choix === "8") {
      afficherStatistiques();
    } else if (choix === "0") {
      console.log("Au revoir !");
      continuer = false;
    } else {
      console.log("Choix invalide, veuillez réessayer.");
    }
  }
}

demarrer();