import { Personnage } from './Personnage';
import { Sort } from './Sort';
import { CapaciteSpeciale } from './CapaciteSpeciale';

// Classe pour les magiciens
export class Magicien extends Personnage {
    private sorts: Sort[]; // Liste des sorts que le magicien peut connaître
    private _attaqueMage: number;
    private _pointsVieSupMagicien: number;
    private _forceSupMagicien: number;
    private _vitesseSupMagicien: number;
    private _intelligenceSupMagicien: number;
    private _pointManaSupMagicien: number;
    private _chanceCritiqueSupMagicien: number;

    constructor(
        nom: string,
        _attaqueMage: number = 10,
        _pointsVieSupMagicien: number = 5,
        _forceSupMagicien: number = 1,
        _vitesseSupMagicien: number = 1,
        _intelligenceSupMagicien: number = 5,
        _pointManaSupMagicien: number = 45,
        _chanceCritiqueSupMagicien: number = 0,
        _sorts: Sort[] = []
    ) {
        super(nom);

        this._attaqueMage = _attaqueMage;
        this._pointsVieSupMagicien = _pointsVieSupMagicien;
        this._forceSupMagicien = _forceSupMagicien;
        this._vitesseSupMagicien = _vitesseSupMagicien;
        this._intelligenceSupMagicien = _intelligenceSupMagicien;
        this._pointManaSupMagicien = _pointManaSupMagicien;
        this._chanceCritiqueSupMagicien = _chanceCritiqueSupMagicien;
        this.sorts = _sorts; // Initialisez la liste des sorts
    }

    // Méthode pour apprendre un sort
    apprendreSort(sort: Sort) {
        this.sorts.push(sort);
    }

    // Capacité spéciale des magiciens : incanter un sort sur un adversaire
    capaciteSpecialeMagicienIncanterSort(adversaire: Personnage) {
        // Utilisez la méthode de la capacité spéciale générique pour les Magiciens
        this.capaciteSpeciale.capaciteSpecialeMagicienIncanterSort(this, adversaire);
    }

    

    // Méthodes getter pour les attributs supplémentaires des Magiciens
    get pointsVieSupMagicien() {
        return this._pointsVieSupMagicien;
    }

    get forceSupMagicien() {
        return this._forceSupMagicien;
    }

    get vitesseSupMagicien() {
        return this._vitesseSupMagicien;
    }

    get intelligenceSupMagicien() {
        return this._intelligenceSupMagicien;
    }

    get pointManaSupMagicien() {
        return this._pointManaSupMagicien;
    }

    get chanceCritiqueSupMagicien() {
        return this._chanceCritiqueSupMagicien;
    }

    // Méthodes getter pour les attributs totaux
    get forceTotale() {
        return this.force + this._attaqueMage + this._forceSupMagicien;
    }

    get vitesseTotale() {
        return this.vitesse + this._vitesseSupMagicien;
    }

    get intelligenceTotal() {
        return this.intelligence + this._intelligenceSupMagicien;
    }

    get pointManaTotal() {
        return this.pointMana + this._pointManaSupMagicien;
    }

    get chanceCritiqueTotal() {
        return this.chanceCritique + this._chanceCritiqueSupMagicien;
    }
}
