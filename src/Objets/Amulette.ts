import { Personnage } from "../Personnage";
import { Accessoire } from "./Accessoire";

// Classe pour l'amulette
export class Amulette extends Accessoire {
    constructor(niveauRequis: number, prix: number, poids: number) {
      super(niveauRequis, prix, poids);
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation spécifique à une amulette
      // par exemple, augmenter l'intelligence du personnage
    }
  }