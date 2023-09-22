import { Personnage } from './Personnage';

// Classe pour les chevaliers
export class Chevalier extends Personnage {
    private degatsRecus: number; // Ajout de la variable degatsRecus

    constructor(nom: string) {
        super();
        this.nom = nom;
        this.pointsVie += 40;
        this.force += 5;
        this.vitesse += 1;
        this.intelligence += 1;
        this.pointMana = 5;
        this.chanceCritique = 3;
        this.degatsRecus = 0; // Initialisation de degatsRecus à 0
    }

    // Capacité spéciale des chevaliers
    utiliserBouclier() {
        // Réduction des dégâts reçus de 25%
        const reductionDegats = 0.25; // 25% de réduction
        // Calcul des dégâts reçus après réduction
        const degatsReduits = this.degatsRecus * (1 - reductionDegats);

        // Mettre à jour les dégâts reçus avec les dégâts réduits
        this.degatsRecus = degatsReduits;
    }
}