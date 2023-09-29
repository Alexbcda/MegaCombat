import { Personnage } from './Personnage';

// Classe abstraite pour les capacités spéciales
export abstract class CapaciteSpeciale {
    // Propriétés communes à toutes les capacités
    protected nom: string;
    protected description: string;

    constructor(nom: string, description: string) {
        this.nom = nom;
        this.description = description;
    }

    // Méthode abstraite à implémenter dans les classes de capacité spéciale
    abstract activer(personnage: Personnage, cible: Personnage): void;
}
