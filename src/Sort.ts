// Sort.ts
import { Magicien } from './Magicien'; 
import { Personnage } from './Personnage'; 

export class Sort {
    constructor(
        public nom: string,
        public description: string,
        public intelligenceRequise: number,
        public coutMana: number,
        public effet: (magicien: Magicien, cible: Personnage) => void
    ) {}
}
