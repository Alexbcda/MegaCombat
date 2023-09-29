import { Personnage } from "../Personnage";

export abstract class Equipable implements IObjet {

  // Tous les équipables ont un niveau. 
  private _niveauRequis: number;
  // Toutes les armes augmentent la force du personnage
  private _forceBonus: number;
  // Parfois sa vitesse
  private _vitesseBonus: number;
  // et/ou son intelligence
  private _intelligenceBonus: number;

  // Propriétés requises par l'interface IObjet
  private _prix: number;
  private _poids: number;

  constructor(niveauRequis: number, forceBonus: number, vitesseBonus: number, intelligenceBonus: number, prix: number, poids: number) {
    this._niveauRequis = niveauRequis;
    this._forceBonus = forceBonus;
    this._vitesseBonus = vitesseBonus;
    this._intelligenceBonus = intelligenceBonus;
    this._prix = prix; // Initialisation de la propriété prix
    this._poids = poids; // Initialisation de la propriété poids
  }

  // Méthode pour vérifier si le personnage peut équiper l'objet
  public peutEquiper(personnage: Personnage): boolean {
    return personnage.getNiveau() >= this._niveauRequis;
  }

  // Getters
  public getNiveauRequis(): number {
    return this._niveauRequis;
  }

  public getForceBonus(): number {
    return this._forceBonus;
  }

  public getVitesseBonus(): number {
    return this._vitesseBonus;
  }

  public getIntelligenceBonus(): number {
    return this._intelligenceBonus;
  }

  public getPrix(): number {
    return this._prix;
  }

  public getPoids(): number {
    return this._poids;
  }

  // Setters
  public setNiveauRequis(niveauRequis: number): void {
    this._niveauRequis = niveauRequis;
  }

  public setForceBonus(forceBonus: number): void {
    this._forceBonus = forceBonus;
  }

  public setVitesseBonus(vitesseBonus: number): void {
    this._vitesseBonus = vitesseBonus;
  }

  public setIntelligenceBonus(intelligenceBonus: number): void {
    this._intelligenceBonus = intelligenceBonus;
  }

  public setPrix(prix: number): void {
    this._prix = prix;
  }

  public setPoids(poids: number): void {
    this._poids = poids;
  }

  // Méthode abstraite à implémenter dans les sous-classes
  public abstract equipe(personnage: Personnage): void;
}
