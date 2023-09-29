import { isGeneratorFunction } from 'util/types';
import { Bonus } from './Bonus';
import { Metier } from './Metier';
import { CapaciteSpeciale } from './CapaciteSpeciale';

export abstract class Personnage {
    protected capaciteSpeciale: CapaciteSpeciale | null;
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

    // Attributs spécifiques pour les sorts et les bonus
    bonus: Bonus[];

    constructor(nom: string, niveau = 1) {
        this._nom = nom;
        this._niveau = niveau;
        this._pointsExp = 0;
        this._type = "";
        this._pointsVie = 50;
        this._force = 10;
        this._vitesse = 10;
        this._intelligence = 10;
        this._pointMana = 50;
        this._chanceCritique = 2;
        this.capaciteSpeciale = null; // Au départ, le personnage n'a pas de capacité spéciale
        // Initialisation des attributs spécifiques aux sorts et aux bonus
        this.bonus = [];
    }
    
// Méthode pour activer la capacité spéciale
utiliserCapaciteSpeciale(cible: Personnage) {
    if (this.capaciteSpeciale) {
        this.capaciteSpeciale.activer(this, cible);
    } else {
        console.log(`${this.nom} n'a pas de capacité spéciale.`);
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
    }

    // Méthode pour faire subir des dégâts au personnage
    subirDegats(degats: number) {
        this._pointsVie -= degats;
        if (this._pointsVie < 0) {
            this._pointsVie = 0;
        }
    }
     
    beforeFight() {
        // Implémentez les actions à effectuer avant l'attaque ici
    }

    // Méthode pour attaquer un autre personnage s'il est en vie
    attaquer(cible: Personnage) {
        // Vérifiez d'abord si le personnage attaquant est en vie
        if (!this.estEnVie()) {
            console.log(`${this._nom} ne peut pas attaquer car il est mort.`);
            return;
        }

        // Vérifiez ensuite si la cible est en vie
        if (!cible.estEnVie()) {
            console.log(`${this._nom} ne peut pas attaquer ${cible.nom} car la cible est morte.`);
            return;
        }

        // Implémentez ici la logique d'attaque, par exemple, calcul des dégâts et application à la cible
        const degats = /* Calcul des dégâts en fonction de la force, etc. */
        cible.subirDegats(degats);

        console.log(`${this._nom} attaque ${cible.nom} et lui inflige ${degats} points de dégâts.`);
    }

    // Méthode pour vérifier si le personnage est en vie
    estEnVie() {
        return this._pointsVie > 0;
    }

    AfterAttack(cible: Personnage) {
        // Vérifiez si la cible est en vie
        if (cible.estEnVie()) {
            console.log(`${cible.nom} est toujours en vie après l'attaque.`);
            // Le combat continue, rien de spécial à faire ici
        } else {
            console.log(`${cible.nom} est mort après l'attaque !`);
            // La cible est morte, vous pouvez prendre des mesures supplémentaires si nécessaire
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

    abstract get forceTotale(): number;

}
