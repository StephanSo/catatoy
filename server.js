const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge.js');

console.log("Bienvenue dnas le catalogue de jouet");

let tranche25 = new TrancheAge("tranche25",2,5);
console.log(tranche25.toString());

let unJouet = new Jouet("Draisienne junior bleue", tranche25);
console.log(unJouet.trancheAge);