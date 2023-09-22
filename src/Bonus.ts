import { Personnage } from './Personnage';

// Bonus.ts
export class Bonus {
    condition: (personnage: Personnage) => boolean;
    effet: (personnage: Personnage) => void;
    description: string;

    constructor(
        condition: (personnage: Personnage) => boolean,
        effet: (personnage: Personnage) => void,
        description: string
    ) {
        this.condition = condition;
        this.effet = effet;
        this.description = description;
    }
}
