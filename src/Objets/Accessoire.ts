import { Personnage } from "../Personnage";
import { Equipable } from "./Equipable";

// Classe pour les accessoires
export abstract class Accessoire extends Equipable {
    constructor(niveauRequis: number, prix: number, poids: number) {
      super(niveauRequis, prix, poids);
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation pour un accessoire
      // par exemple, augmenter l'intelligence du personnage
    }
  }