import { CapaciteSpecialeArcher } from './CapaciteSpecialeArcher';
import { Personnage } from './Personnage';


// Classe pour les archers
export class Archer extends Personnage {
    private capaciteSpeciale: CapaciteSpecialeArcher; // Archer a une capacité spéciale
    private _pointVieSupArcher: number;
    private _forceSupArcher: number;
    private _vitesseSupArcher: number;
    private _intelligenceSupArcher: number;
    private _pointManaSupArcher: number;
    private _chanceCritiqueSupArcher: number;

    constructor(
        nom: string,
        _attaqueArcher: number = 2,
        _pointVieSupArcher: number = 15,
        _forceSupArcher: number = 2,
        _vitesseSupArcher: number = 3,
        _intelligenceSupArcher: number = 1,
        _pointManaSupArcher: number = 10,
        _chanceCritiqueSupArcher: number = 5
    ) {
        super(nom);

        this._attaqueArcher = _attaqueArcher;
        this._pointVieSupArcher = _pointVieSupArcher;
        this._forceSupArcher = _forceSupArcher;
        this._vitesseSupArcher = _vitesseSupArcher;
        this._intelligenceSupArcher = _intelligenceSupArcher;
        this._pointManaSupArcher = _pointManaSupArcher;
        this._chanceCritiqueSupArcher = _chanceCritiqueSupArcher;
        this.capaciteSpeciale = new CapaciteSpecialeArcher(); // Créez une instance de capacité spéciale pour l'archer
      
    }
// Méthode pour activer la capacité spéciale de l'archer
activerCapaciteSpeciale(cible: Personnage) {
    if (this.capaciteSpeciale) {
        this.capaciteSpeciale.activer(this, cible);
    } else {
        console.log(`${this.nom} n'a pas de capacité spéciale.`);
    }
}

    // CapacitéSpécialeArchers
    capaciteSpecialeArchersPoserPiege(adversaire: Personnage) {
        // Utilisez la méthode de la capacité spéciale générique pour les archers
        this.capaciteSpeciale.CapaciteSpecialeArchersPoserPiege(this, adversaire);
    }

    get VieTotale() {
        return this.pointsVie + this._pointVieSupArcher;
    }

    get forceTotale() {
        return this.force + this._forceSupArcher;
    }

    get vitesseTotale() {
        return this.vitesse + this._vitesseSupArcher;
    }

    get intelligenceTotal() {
        return this.intelligence + this._intelligenceSupArcher;
    }

    get pointManaTotal() {
        return this.pointMana + this._pointManaSupArcher;
    }

    get chanceCritiqueTotal() {
        return this.chanceCritique + this._chanceCritiqueSupArcher;
    }
}
