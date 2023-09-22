import { Bonus } from './Bonus';


// Personnage.ts
export class Personnage {
    private _nom: string;
    private _niveau: number;
    private _pointsExp: number;
    private _type: string;
    private _pointsVie: number;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _pointMana: number;
    private _chanceCritique: number;
    private _metier: string; // Attribut pour le métier

    // Attributs spécifiques pour les sorts et les bonus
    bonus: Bonus[];

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
        this._metier = ""; // Initialisez l'attribut métier à vide

        // Initialisation des attributs spécifiques aux sorts et aux bonus
        this.bonus = [];
    }

    attaquer() {
        // Implémentez l'attaque normale ici
    }

    // Méthode pour utiliser un bonus si possible
    utiliserBonus() {
        for (const bonus of this.bonus) {
            if (bonus.condition(this)) {
                bonus.effet(this);
                return;
            }
        }

        // Si aucun bonus n'est utilisé, effectuer une attaque normale
        this.attaquer();
    }
// Méthode pour faire subir des dégâts au personnage
subirDegats(degats: number) {
    this.pointsVie -= degats;
    if (this.pointsVie < 0) {
        this.pointsVie = 0;
    }
}


    // Getters et setters pour chaque attribut
    get nom(): string {
        return this._nom;
    }

    set nom(nom: string) {
        this._nom = nom;
    }

    get niveau(): number {
        return this._niveau;
    }

    set niveau(niveau: number) {
        this._niveau = niveau;
    }

    get pointsExp(): number {
        return this._pointsExp;
    }

    set pointsExp(pointsExp: number) {
        this._pointsExp = pointsExp;
    }

    get type(): string {
        return this._type;
    }

    set type(type: string) {
        this._type = type;
    }

    get pointsVie(): number {
        return this._pointsVie;
    }

    set pointsVie(pointsVie: number) {
        this._pointsVie = pointsVie;
    }

    get force(): number {
        return this._force;
    }

    set force(force: number) {
        this._force = force;
    }

    get vitesse(): number {
        return this._vitesse;
    }

    set vitesse(vitesse: number) {
        this._vitesse = vitesse;
    }

    get intelligence(): number {
        return this._intelligence;
    }

    set intelligence(intelligence: number) {
        this._intelligence = intelligence;
    }

    get pointMana(): number {
        return this._pointMana;
    }

    set pointMana(pointMana: number) {
        this._pointMana = pointMana;
    }

    get chanceCritique(): number {
        return this._chanceCritique;
    }

    set chanceCritique(chanceCritique: number) {
        this._chanceCritique = chanceCritique;
    }

    get metier(): string {
        return this._metier;
    }

    set metier(metier: string) {
        this._metier = metier;
    }
}
