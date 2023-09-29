import { Personnage } from './Personnage';
import { CapaciteSpeciale } from './CapaciteSpeciale';

// Classe pour les chevaliers
export class Chevalier extends Personnage {
    private capaciteSpeciale: CapaciteSpeciale;
    private _attaqueChevalier: number;
    private _pointsVieSupChevalier: number;
    private _forceSupChevalier: number;
    private _vitesseSupChevalier: number;
    private _intelligenceSupChevalier: number;
    private _pointManaSupChevalier: number;
    private _chanceCritiqueSupChevalier: number;
    private _degatsRecus: number;

    constructor(
        nom: string,
        _pointsVieSupChevalier = 40,
        _forceSupChevalier = 5,
        _vitesseSupChevalier = 1,
        _intelligenceSupChevalier = 1,
        _pointManaSupChevalier = 5,
        _chanceCritiqueSupChevalier = 3,
        _degatsRecus = 0
    ) {
        super(nom);

        this._attaqueChevalier = 15; // Attaque de base du chevalier
        this._pointsVieSupChevalier = _pointsVieSupChevalier;
        this._forceSupChevalier = _forceSupChevalier;
        this._vitesseSupChevalier = _vitesseSupChevalier;
        this._intelligenceSupChevalier = _intelligenceSupChevalier;
        this._pointManaSupChevalier = _pointManaSupChevalier;
        this._chanceCritiqueSupChevalier = _chanceCritiqueSupChevalier;
        this._degatsRecus = _degatsRecus; // Initialisation de degatsRecus à 0

        this.capaciteSpeciale = new CapaciteSpeciale();
    }

    // Capacité spéciale des chevaliers
    capaciteSpecialeChevalierBouclier() {
        // Utilisez la méthode de la capacité spéciale des chevaliers
        this.capaciteSpeciale.capaciteSpecialeChevalierBouclier(this);
    }

    get forceTotale() {
        return this.force + this._attaqueChevalier + this._forceSupChevalier;
    }

    get vitesseTotale() {
        return this.vitesse + this._vitesseSupChevalier;
    }

    get intelligenceTotal() {
        return this.intelligence + this._intelligenceSupChevalier;
    }

    get pointManaTotal() {
        return this.pointMana + this._pointManaSupChevalier;
    }

    get chanceCritiqueTotal() {
        return this.chanceCritique + this._chanceCritiqueSupChevalier;
    }
}
