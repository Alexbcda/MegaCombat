import { Personnage } from './Personnage';

// Classe pour les Vikings
export class Viking extends Personnage {
    private _attaqueViking: number;
    private _pointsVieSupViking: number;
    private _forceSupViking: number;
    private _vitesseSupViking: number;
    private _intelligenceSupViking: number;
    private _pointManaSupViking: number;
    private _chanceCritiqueSupViking;

    constructor(
        nom: string,
        pointsVieSupViking = 25,
        forceSupViking = 4,
        vitesseSupViking = 2,
        intelligenceSupViking = 0,
        pointManaSupViking = 0,
        chanceCritiqueSupViking = 8
    ) {
        super(nom);

        this._attaqueViking = 15;
        this._pointsVieSupViking = pointsVieSupViking;
        this._forceSupViking = forceSupViking;
        this._vitesseSupViking = vitesseSupViking;
        this._intelligenceSupViking = intelligenceSupViking;
        this._pointManaSupViking = pointManaSupViking;
        this._chanceCritiqueSupViking = chanceCritiqueSupViking;
    }

    // CapacitéSpécialeArchers
    capaciteSpecialeVikingVolVie(adversaire: Personnage) {
        // Utilisez la méthode de la capacité spéciale générique pour les archers
        this.capaciteSpeciale.capaciteSpecialeVikingVolVie(this, adversaire);
    }

    // Méthodes getter pour les attributs supplémentaires des Vikings
   
    get forceTotale(): number {
        // Calculez ici la force totale du Viking en ajoutant sa force de base à ses attributs supplémentaires
        return this.force + this._forceSupViking;
    }
   
    get pointsVieSupViking(): number {
        return this._pointsVieSupViking;
    }

    get forceSupViking(): number {
        return this._forceSupViking;
    }

    get vitesseSupViking(): number {
        return this._vitesseSupViking;
    }

    get intelligenceSupViking(): number {
        return this._intelligenceSupViking;
    }

    get pointManaSupViking(): number {
        return this._pointManaSupViking;
    }

    get chanceCritiqueSupViking(): number {
        return this._chanceCritiqueSupViking;
    }
}
