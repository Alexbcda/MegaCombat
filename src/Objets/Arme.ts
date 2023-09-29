import { Personnage } from "../Personnage";
import { Equipable } from "./Equipable";

// Classe pour les armes
export abstract class Arme extends Equipable {
  private _forceBonus: number;
  private _vitesseBonus: number;
  private _intelligenceBonus: number;

  constructor(
    niveauRequis: number,
    prix: number,
    poids: number,
    forceBonus: number = 0, // Valeurs par défaut
    vitesseBonus: number = 0, // Valeurs par défaut
    intelligenceBonus: number = 0 // Valeurs par défaut
  ) {
    super(niveauRequis, prix, poids);
    this._forceBonus = forceBonus;
    this._vitesseBonus = vitesseBonus;
    this._intelligenceBonus = intelligenceBonus;
  }

  public get forceBonus(): number {
    return this._forceBonus;
  }

  public set forceBonus(value: number) {
    this._forceBonus = value;
  }

  public get vitesseBonus(): number {
    return this._vitesseBonus;
  }

  public set vitesseBonus(value: number) {
    this._vitesseBonus = value;
  }

  public get intelligenceBonus(): number {
    return this._intelligenceBonus;
  }

  public set intelligenceBonus(value: number) {
    this._intelligenceBonus = value;
  }

  public utiliser(personnage: Personnage): void {
    // Implémentez le comportement d'utilisation pour une arme
    // par exemple, augmenter la force, la vitesse et l'intelligence du personnage
  }
}
