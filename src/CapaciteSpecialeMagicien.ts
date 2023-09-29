import { Personnage } from './Personnage';
import { CapaciteSpeciale } from './CapaciteSpeciale';
import { Sort } from './Sort'; // Importez la classe Sort si nécessaire

// Classe pour la capacité spéciale des magiciens
export class CapaciteSpecialeMagicien extends CapaciteSpeciale {
    private sortsConnus: Sort[]; // Liste des sorts connus par le magicien
    private pointsManaAutomatiques: number; // Points de mana récupérés automatiquement chaque tour

    constructor() {
        super('Incantation Magique', 'Permet l\'incantation de sorts et la récupération automatique de points de mana.');

        this.sortsConnus = []; // Initialisez la liste des sorts connus (peut contenir un sort à la création)
        this.pointsManaAutomatiques = 0; // Initialisez le nombre de points de mana récupérés automatiquement
    }

    // Méthode pour connaître un sort
    apprendreSort(sort: Sort) {
        this.sortsConnus.push(sort);
    }

    // Méthode pour activer la capacité spéciale des magiciens
    activer(personnage: Personnage, cible: Personnage): void {
        // Récupération automatique de points de mana (la moitié de l'intelligence)
        const pointsManaRecuperes = personnage.intelligence / 2;
        personnage.gagnerMana(pointsManaRecuperes);

        // Lancement automatique de sorts dans certaines conditions (vous devez définir ces conditions)
        for (const sort of this.sortsConnus) {
            // Vérifiez si les conditions pour lancer le sort sont remplies
            if (/* Conditions pour lancer le sort */) {
                sort.effet(personnage, cible);
            }
        }
    }
}
