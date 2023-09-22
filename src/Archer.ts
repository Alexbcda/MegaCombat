import { Personnage } from './Personnage';

// Classe pour les archers
export class Archer extends Personnage {
    constructor(nom: string) {
        super();
        this.nom = nom;
        this.pointsVie += 15;
        this.force += 2;
        this.vitesse += 3;
        this.intelligence += 1;
        this.pointMana = 10;
        this.chanceCritique = 5;
    }

    // Capacité spéciale des archers
    poserPiege(adversaire: Personnage) {
        if (this.vitesse > adversaire.vitesse) {
            // Le personnage est plus rapide que son adversaire, il pose un piège
            const degatsPiege = adversaire.force * 2.5; // 250% des dégâts d'une attaque normale
            adversaire.subirDegats(degatsPiege);
        }
    }
}