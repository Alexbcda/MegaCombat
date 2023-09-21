export class Arme {

    private nom: string
    public force: number

    constructor(
        nom: string,
        force: number,
    ) {
        this.nom = nom
        this.force = force
    }

    public isLameDeSang(): boolean {
        return this.nom === 'Lame de sang'
    }
}