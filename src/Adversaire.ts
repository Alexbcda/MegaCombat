class Adversaire {
    private nom: string;
    private pointsVie: number;
    private force: number;
    private vitesse: number;
  
    constructor(nom: string, pointsVie: number, force: number, vitesse: number) {
      this.nom = nom;
      this.pointsVie = pointsVie;
      this.force = force;
      this.vitesse = vitesse;
    }
  
    // Méthode pour déterminer si l'adversaire est encore en vie
    isAlive(): boolean {
      return this.pointsVie > 0;
    }
  }
  