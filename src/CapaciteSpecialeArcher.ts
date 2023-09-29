import { Personnage } from './Personnage';
import { CapaciteSpeciale } from './CapaciteSpeciale';

// Classe pour la capacité spéciale des archers
export class CapaciteSpecialeArcher extends CapaciteSpeciale {
    // Propriétés spécifiques aux archers
    private degatsPiege: number;

    constructor() {
        super('Pose de Piège', 'Pose un piège infligeant des dégâts élevés.');
        this.degatsPiege = 250; // Valeur arbitraire pour les dégâts du piège
    }

    // Méthode spécifique à la capacité des archers
    activer(personnage: Personnage, cible: Personnage): void {
        if (personnage.vitesse > cible.vitesse) {
            // Le personnage est plus rapide que son adversaire, il pose un piège
            cible.subirDegats(this.degatsPiege); // Utilisez directement la propriété de classe
        }
    }

   
}
