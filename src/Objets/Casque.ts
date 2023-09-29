import { Personnage } from "../Personnage";
import { Armure } from "./Armure";

// Classe pour le casque
export class Casque extends Armure {
  constructor(niveauRequis: number, prix: number, poids: number) {
    // La valeur spécifique à un casque (protection) doit être définie ici
    const protection = 5;

    super(niveauRequis, prix, poids, protection);
  }

  public utiliser(personnage: Personnage): void {
    // Implémentez le comportement d'utilisation spécifique à un casque
    // par exemple, augmenter la protection du personnage
  }
}
