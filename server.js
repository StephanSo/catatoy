const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge.js');
const Categorie = require('./categorie');

console.log("Bienvenue dnas le catalogue de jouet");

let tranche25 = new TrancheAge("tranche25",2,5);
//console.log(tranche25.toString());

let categorie1 = new Categorie("Plein Air");
//console.log(categorie1.libelle);

let unJouet = new Jouet("Draisienne junior bleue", tranche25,categorie1);
//console.log(unJouet.trancheAge);
categorie1.afficherJouets(console.log);