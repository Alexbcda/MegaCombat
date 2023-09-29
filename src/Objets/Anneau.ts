import { Personnage } from "../Personnage";
import { Accessoire } from "./Accessoire";

// Classe pour l'anneau
export class Anneau extends Accessoire {
    constructor(niveauRequis: number, prix: number, poids: number) {
      super(niveauRequis, prix, poids);
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation spécifique à un anneau
      // par exemple, augmenter l'intelligence du personnage
    }
  }