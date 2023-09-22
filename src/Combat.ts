
import { Viking } from './Viking'; 

export class Combat {

    public vikings: Viking[]

    constructor(
        vikings: Viking[],
    ) {
        this.vikings = vikings
    }

    public simulate() {
        let fighterIndex = this.firstViking.force > this.secondViking.force ? 1 : 0
        
        while (this.firstViking.sante > 0 && this.secondViking.sante > 0) {
            const fighterViking = this.vikings[fighterIndex]
            const defenserViking = this.vikings[1 - fighterIndex]
            
            fighterViking.fight(defenserViking)

            fighterIndex = 1 - fighterIndex
        }
    }

    public afficherVainqueur() {
        const vainqueur = this.firstViking.sante > 0 ? this.firstViking : this.secondViking
        console.log(`${vainqueur.nom} a gagné !`)
    }

    get firstViking(): Viking {
        return this.vikings[0]
    }

    get secondViking(): Viking {
        return this.vikings[1]
    }
}