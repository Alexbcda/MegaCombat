// Import classes de personnages que vous avez créées
import { Archer } from './Archer';
import { Chevalier } from './Chevalier';
import { Magicien } from './Magicien';
import { Viking } from './Viking';
import { Voleur } from './Voleur';


// Récupérez les éléments du DOM
const archerButton = document.getElementById("archer") as HTMLButtonElement;
const chevalierButton = document.getElementById("chevalier") as HTMLButtonElement;
const magicienButton = document.getElementById("magicien") as HTMLButtonElement;
const voleurButton = document.getElementById("voleur") as HTMLButtonElement;
const nomInput = document.getElementById("nom") as HTMLInputElement;
const lancerCombatButton = document.getElementById("lancer-combat") as HTMLButtonElement;
const resultatsDiv = document.getElementById("resultats") as HTMLDivElement;

// Variables pour stocker le type de personnage et le nom du personnage
let typePersonnage = "";
let nomPersonnage = "";

// Écouteurs d'événements pour les boutons de sélection de type de personnage
archerButton.addEventListener("click", () => {
    typePersonnage = "Archer";
});
chevalierButton.addEventListener("click", () => {
    typePersonnage = "Chevalier";
});
magicienButton.addEventListener("click", () => {
    typePersonnage = "Magicien";
});
voleurButton.addEventListener("click", () => {
    typePersonnage = "Voleur";
});

// Écouteur d'événement pour le champ de texte du nom du personnage
nomInput.addEventListener("input", () => {
    nomPersonnage = nomInput.value;
});

// Écouteur d'événement pour le bouton "Lancer le combat"
lancerCombatButton.addEventListener("click", () => {
    if (typePersonnage && nomPersonnage) {
        // L'utilisateur a choisi un type de personnage et a saisi un nom
        // créer un personnage du type choisi avec le nom saisi
        // lancer le combat 
        let personnage;

        switch (typePersonnage) {
            case "Archer":
                personnage = new Archer(nomPersonnage);
                break;
            case "Chevalier":
                personnage = new Chevalier(nomPersonnage);
                break;
            case "Magicien":
                personnage = new Magicien(nomPersonnage);
                break;
            case "Voleur":
                personnage = new Voleur(nomPersonnage);
                break;
            case "Viking": 
                personnage = new Viking(nomPersonnage); 
                break;
            default:
                personnage = null;
                break;
        }

        if (personnage) {
            const message = `Vous avez choisi un ${typePersonnage} nommé ${nomPersonnage}.`;
            resultatsDiv.textContent = message;

            //  lancer le combat ou effectuer d'autres actions avec le personnage
        } else {
            resultatsDiv.textContent = "Type de personnage invalide.";
        }
    } else {
        // Affichez un message d'erreur si des informations sont manquantes
        resultatsDiv.textContent = "Veuillez choisir un type de personnage et saisir un nom.";
    }
});
