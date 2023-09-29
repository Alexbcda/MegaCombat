// Classe pour la hache
export class Hache extends Arme {
    constructor(niveauRequis: number, prix: number, poids: number) {
      // Les valeurs spécifiques à la hache (forceBonus, vitesseBonus, intelligenceBonus)
      // doivent être définies ici ou passées en paramètres si elles sont propres à la hache
      const forceBonus = 15;
      const vitesseBonus = 0;
      const intelligenceBonus = 0;
  
      super(niveauRequis, prix, poids, forceBonus, vitesseBonus, intelligenceBonus);
    }
  
    public utiliser(personnage: Personnage): void {
      // Implémentez le comportement d'utilisation spécifique à la hache
      // par exemple, augmenter la force du personnage
    }
  }