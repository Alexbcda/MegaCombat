import { Personnage } from './Personnage';

export class Viking extends Personnage {
    private defense: number = 10; // Définissez la valeur de défense par défaut ici

    constructor(nom: string) {
        super();
        this.nom = nom;
        this.metier = "Viking"; 
        this.pointsVie += 25; 
        this.force += 4; 
        this.vitesse += 2; 
        this.intelligence = 0; 
        this.pointMana = 0; 
        this.chanceCritique += 8; 
    }

    public fight(otherViking: Viking) {
        const attackValue = this.getAttackValue();
        const damageDealt = this.calculateDamageDealt(attackValue, otherViking);
        
        // Vol de vie : récupérer 15% des dégâts infligés en points de santé
        const lifeStolen = Math.floor(damageDealt * 0.15);
        this.pointsVie += lifeStolen;

        // Récupérer 3% des dégâts infligés en points de mana
        const manaGained = Math.floor(damageDealt * 0.03);
        this.pointMana += manaGained;

        otherViking.receiveAttack(damageDealt);
    }

    private getAttackValue(): number {
        // Implémentez le calcul de la valeur d'attaque ici (par exemple, basée sur la force et autres facteurs)
        return this.force;
    }

    private calculateDamageDealt(attackValue: number, target: Viking): number {
        let damageDealt = attackValue;

        // Vérifier si le coup est critique (8% de chance)
        if (Math.random() < 0.08) {
            damageDealt *= 2; // Les coups critiques infligent le double de dégâts
        }

        // Appliquer la défense de la cible
        damageDealt -= target.defense;

        // Ne pas infliger de dégâts négatifs
        if (damageDealt < 0) {
            damageDealt = 0;
        }

        return damageDealt;
    }

    private receiveAttack(amount: number) {
        // Implémentez la réception des dégâts ici en fonction de la valeur "amount"
        // Réduisez les points de vie du Viking en conséquence
        // Assurez-vous que les points de vie ne deviennent pas négatifs
    }
}
