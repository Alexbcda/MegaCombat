import { Personnage } from './Personnage';
import { Sort } from './Sort'; 

// Classe pour les magiciens
export class Magicien extends Personnage {
    private sorts: Sort[]; // Liste des sorts que le magicien peut connaître

    constructor(nom: string) {
        super();
        this.nom = nom;
        this.pointsVie += 5;
        this.force += 1;
        this.vitesse += 1;
        this.intelligence += 5;
        this.pointMana = 45;
        this.chanceCritique = 0;
        this.sorts = []; // Initialisez la liste des sorts
    }

    // méthode pour apprendre un sort
    apprendreSort(sort: Sort) {
        this.sorts.push(sort);
    }

    // méthode pour incanter un sort
    incanterSort(sort: Sort, cible: Personnage) {
        // Vérifiez si le magicien peut incanter le sort en fonction de ses caractéristiques
        if (
            this.pointMana >= sort.coutMana &&
            this.intelligence >= sort.intelligenceRequise
        ) {
            // Réduisez le mana en conséquence
            this.pointMana -= sort.coutMana;

            // Appliquez l'effet du sort
            sort.effet(this, cible);
        }
    }
}
