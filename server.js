const express = require('express');
const app = express();

const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge');
const Categorie = require('./categorie');

//données
let tranche02 = new TrancheAge("tranche02",0,2);
let tranche25 = new TrancheAge("tranche25",2,5);
let tranche48 = new TrancheAge("tranche48",4,8);

let categorie1 = new Categorie("Plain Air");
let categorie2 = new Categorie("Jeux d'imagination");
let categorie3 = new Categorie("Jeux d'eveil");

let lesJouets = [];
let unJouet1 = new Jouet("Draisienne junior bleue",tranche25,categorie1);
lesJouets.push(unJouet1);

let unJouet2 = new Jouet("Trottinette 2 en space Blanche", tranche48, categorie1);
lesJouets.push(unJouet2);

let unJouet3 = new Jouet("Atelier de bricolage Tap tap Céhicules", tranche48, categorie2);
lesJouets.push(unJouet3);

//Routes
app.get('/', function(req,res){
    let responseText = 'Bienvenue dans le catalogue de jouet';
    res.send(responseText);
});

//Affiche tous les jouets

app.get('/jouets',
    (req,res)=>{
    let responseText ='Voici la liste des jouets <br />';
    lesJouets.forEach(
        (unJouet)=>{responseText += `Jouet : ${unJouet.libelle} <br />`;}
        );
    res.send(responseText);
    });

//Demarrage du serveur

try{
    app.listen(8081,'127.0.0.1', ()=>{
        console.log("Serveur demarré");
    });

}catch (err){
    console.error('Erreur de démarrage du serveur !',err)
}