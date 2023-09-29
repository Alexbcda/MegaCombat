import { Personnage } from "../Personnage";
import { Accessoire } from "./Accessoire";

// Classe pour le bracelet
export class Bracelet extends Accessoire {
  constructor(niveauRequis: number, prix: number, poids: number) {
    super(niveauRequis, prix, poids);
  }

  public utiliser(personnage: Personnage): void {
    // Implémentez le comportement d'utilisation spécifique à un bracelet
    // par exemple, augmenter l'intelligence du personnage
  }
}
