class Personnage {
    private _nom: string;
    private _niveau: number;
    private _pointsExp: number;
    private _type: string;
    private _pointsVie: number;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _pointMana: number; // énergie magnétique
    private _chanceCritique: number;


     // Équipement
     private _equipementTete: string;
     private _equipementMains: string;
     private _equipementTorse: string;
     private _equipementJambes: string;



    constructor() {
        this._nom = "";
        this._niveau = 1;
        this._pointsExp = 0;
        this._type = "";
        this._pointsVie = 50;
        this._force = 10;
        this._vitesse = 10;
        this._intelligence = 10;
        this._pointMana = 50;
        this._chanceCritique = 2;

        // Initialisation de l'équipement
        this._equipementTete = "";
        this._equipementMains = "";
        this._equipementTorse = "";
        this._equipementJambes = "";



    }

    // Getters
    get nom(): string {
        return this._nom;
    }

    get niveau(): number {
        return this._niveau;
    }

    get pointsExp(): number {
        return this._pointsExp;
    }

    get type(): string {
        return this._type;
    }

    get pointsVie(): number {
        return this._pointsVie;
    }

    get force(): number {
        return this._force;
    }

    get vitesse(): number {
        return this._vitesse;
    }

    get intelligence(): number {
        return this._intelligence;
    }

    get pointMana(): number {
        return this._pointMana;
    }

    get chanceCritique(): number {
        return this._chanceCritique;
    }

    // Setters
    set nom(nom: string) {
        this._nom = nom;
    }

    set niveau(niveau: number) {
        this._niveau = niveau;
    }

    set pointsExp(pointsExp: number) {
        this._pointsExp = pointsExp;
    }

    set type(type: string) {
        this._type = type;
    }

    set pointsVie(pointsVie: number) {
        this._pointsVie = pointsVie;
    }

    set force(force: number) {
        this._force = force;
    }

    set vitesse(vitesse: number) {
        this._vitesse = vitesse;
    }

    set intelligence(intelligence: number) {
        this._intelligence = intelligence;
    }

    set pointMana(pointMana: number) {
        this._pointMana = pointMana;
    }

    set chanceCritique(chanceCritique: number) {
        this._chanceCritique = chanceCritique;
    }



    // Getters pour l'équipement
get equipementTete(): string {
    return this._equipementTete;
}

get equipementMains(): string {
    return this._equipementTete;
}

get equipementTorse(): string {
    return this._equipementTete;
}


get equipementJambes(): string {
    return this._equipementTete;
}


// Setters pour l'équipement
set equipementTete(equipement: string) {
    this._equipementTete = equipement;
}


set equipementMains(equipement: string) {
    this._equipementMains = equipement;
}
    set equipementTorse(equipement: string) {
        this._equipementTorse = equipement;

    }

    set equipementJambes(equipement: string) {
        this._equipementJambes = equipement;

    }

}

export default Personnage;



