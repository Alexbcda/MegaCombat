import { Personnage } from './Personnage';
import { CapaciteSpeciale } from './CapaciteSpeciale';

// Classe pour la capacité spéciale des chevaliers
export class CapaciteSpecialeChevalier extends CapaciteSpeciale {
    constructor() {
        super('Utilisation du Bouclier', 'Réduit les dégâts subis de 25%.');
    }

    // Méthode spécifique à la capacité des chevaliers
    activer(personnage: Personnage, cible: Personnage): void {
        // Réduction des dégâts reçus de 25%
        const reductionDegats = 0.25; // 25% de réduction
        // Calcul des dégâts reçus après réduction
        const degatsReduits = cible.degatsRecus * (1 - reductionDegats);

        // Mettre à jour les dégâts reçus de la cible avec les dégâts réduits
        cible.degatsRecus = degatsReduits;
    }
}
