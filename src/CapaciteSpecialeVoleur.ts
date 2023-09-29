import { Personnage } from './Personnage';
import { CapaciteSpeciale } from './CapaciteSpeciale';

// Classe pour la capacité spéciale des voleurs
export class CapaciteSpecialeVoleur extends CapaciteSpeciale {
    constructor() {
        super('Attaque Surprise', 'Permet une attaque surprise lors d\'un coup critique et la possibilité de réattaquer.');

        // Aucune propriété spécifique à initialiser pour cette capacité
    }

    // Méthode pour activer la capacité spéciale des voleurs
    activer(personnage: Personnage, cible: Personnage): void {
        // Vérifiez si le coup est un coup critique (vous devez définir la logique des coups critiques)
        const estCoupCritique = /* Logique pour déterminer si c'est un coup critique */;

        if (estCoupCritique) {
            // Les dégâts infligés sont de 250% de la force du personnage
            const degats = personnage.force * 2.5;
            cible.subirDegats(degats);

            // Les voleurs peuvent réattaquer lors d'un coup critique
            // Ajoutez ici la logique pour effectuer la réattaquer si nécessaire
        }
    }
}
