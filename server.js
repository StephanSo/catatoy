const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge.js');

console.log("Bienvenue dnas le catalogue de jouet");

let unJouet = new Jouet("Draisienne junior bleue");
console.log(unJouet.libelle);

let tranche25 = new TrancheAge("tracge25",2,5);
console.log(tranche25.toString());