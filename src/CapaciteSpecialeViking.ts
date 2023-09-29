import { Personnage } from './Personnage';
import { CapaciteSpeciale } from './CapaciteSpeciale';

// Classe pour la capacité spéciale des Vikings
export class CapaciteSpecialeViking extends CapaciteSpeciale {
    constructor() {
        super('Vol de Vie', 'Permet de voler de la vie et de récupérer des points de mana lors des attaques.');

        // Aucune propriété spécifique à initialiser pour cette capacité
    }

    // Méthode pour activer la capacité spéciale des Vikings
    activer(personnage: Personnage, cible: Personnage, degatsInfliges: number): void {
        // Calculez les points de santé et de mana récupérés
        const pointsSanteRecuperes = degatsInfliges * 0.15;
        const pointsManaRecuperes = degatsInfliges * 0.03;

        // Ajoutez les points de santé et de mana récupérés au personnage Viking
        personnage.gagnerSante(pointsSanteRecuperes);
        personnage.gagnerMana(pointsManaRecuperes);
    }
}
