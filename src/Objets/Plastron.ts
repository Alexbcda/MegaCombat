// Classe pour le plastron
export class Plastron extends Armure {
    constructor(niveauRequis: number, prix: number, poids: number) {
      // La valeur spécifique à un plastron (protection) doit être définie ici
      const protection = 10;
  
      super(niveauRequis, prix, poids, protection);
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation spécifique à un plastron
      // par exemple, augmenter la protection du personnage
    }
  }