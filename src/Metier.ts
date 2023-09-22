import { Personnage } from './Personnage'; 

export class Metier {
    // Classe qui compose Personnage avec un métier
    private _personnage: Personnage;
    
    constructor(personnage: Personnage, metier: string) {
        this._personnage = personnage;
        this._personnage.metier = metier;
    }
}
