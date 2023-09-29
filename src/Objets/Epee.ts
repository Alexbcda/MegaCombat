import { Personnage } from "../Personnage";
import { Arme } from "./Arme";

// Classe pour l'épée
export class Epee extends Arme {
  constructor(
    niveauRequis: number,
    prix: number,
    poids: number,
    forceBonus: number,
    vitesseBonus: number,
    intelligenceBonus: number
  ) {
    super(niveauRequis, prix, poids, forceBonus, vitesseBonus, intelligenceBonus);
  }

  public utiliser(personnage: Personnage): void {
    // Implémentez le comportement d'utilisation spécifique à l'épée
    // par exemple, augmenter la force, la vitesse et l'intelligence du personnage
  }
}
