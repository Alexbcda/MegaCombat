// Classe pour les gants
export class Gant extends Armure {
    constructor(niveauRequis: number, prix: number, poids: number) {
      // La valeur spécifique à des gants (protection) doit être définie ici
      const protection = 3;
  
      super(niveauRequis, prix, poids, protection);
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation spécifique à des gants
      // par exemple, augmenter la protection du personnage
    }
  }