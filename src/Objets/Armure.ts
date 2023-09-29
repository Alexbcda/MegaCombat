import { Personnage } from "../Personnage";
import { Equipable } from "./Equipable";

// Classe pour les armures
export abstract class Armure extends Equipable {
    private _protection: number;
  
    constructor(niveauRequis: number, prix: number, poids: number, protection: number) {
      super(niveauRequis, prix, poids);
      this._protection = protection;
    }
  
    public get protection(): number {
      return this._protection;
    }
  
    public set protection(value: number) {
      this._protection = value;
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation pour une armure
      // par exemple, augmenter la protection du personnage
    }
  }