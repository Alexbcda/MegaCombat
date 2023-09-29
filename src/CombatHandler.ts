import { Personnage } from './Personnage';

export class CombatHandler {
    // Méthode pour lancer un combat entre deux personnages
    static combat(personnage1: Personnage, personnage2: Personnage) {
        console.log(`Le combat commence entre ${personnage1.nom} et ${personnage2.nom}!`);

        // Comparez les vitesses des personnages pour déterminer qui attaque en premier
        const [attaquant, defenseur] = personnage1.vitesse > personnage2.vitesse
            ? [personnage1, personnage2]
            : personnage1.vitesse < personnage2.vitesse
                ? [personnage2, personnage1]
                : Math.random() < 0.5
                    ? [personnage1, personnage2]
                    : [personnage2, personnage1];

        // Exécutez les actions BeforeFight pour l'attaquant
        attaquant.beforeFight();

        // Définir une fonction pour gérer le tour de combat
        const tourDeCombat = (attaquant: Personnage, defenseur: Personnage) => {
            console.log(`${attaquant.nom} attaque !`);
            attaquant.beforeFight();
            attaquant.attaquer(defenseur);

            if (defenseur.estEnVie()) {
                defenseur.onHit();
            }

            attaquant.afterAttack();
        };

        // Commencez le combat
        while (personnage1.estEnVie() && personnage2.estEnVie()) {
            tourDeCombat(attaquant, defenseur);

            // Inversez les rôles de l'attaquant et du défenseur
            [attaquant, defenseur] = [defenseur, attaquant];

        attaquant.playAttackSpecials()

            // Fin du tour de combat
            [personnage1, personnage2].forEach(personnage => personnage.onTurnEnd());
        }

        // Déterminez le vainqueur
        const vainqueur = personnage1.estEnVie() ? personnage1 : personnage2;
        console.log(`${vainqueur.nom} remporte la victoire !`);
    }
}
