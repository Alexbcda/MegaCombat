import { Personnage } from './Personnage';

export class Voleur extends Personnage {
    constructor(nom: string, ) {
        super();
        this.nom = nom;
        this.pointsVie += 5; 
        this.force += 1; 
        this.vitesse += 1; 
        this.intelligence += 5; 
        this.pointMana = 45; 
        this.chanceCritique = 0; 
    }

    // Méthode pour l'attaque surprise
    attaqueSurprise(adversaire: Personnage) {
        // Vérifiez si le personnage effectue un coup critique
        if (this.coupCritique()) {
            // Attaque spécifique aux voleurs lors d'un coup critique
            const degats = this.force * 2.5; // Dégâts équivalents à 250% de la force
            adversaire.subirDegats(degats);
        }
    }

    // Méthode pour vérifier si le personnage effectue un coup critique
    private coupCritique(): boolean {
        // Générez un nombre aléatoire entre 0 et 1
        const randomValue = Math.random();

        // Comparez le résultat avec la chance de coup critique (exprimée en pourcentage)
        return randomValue < this.chanceCritique / 100;
    }
    get forceTotale(){
        return this.force + this._attaqueMage
    }
}
