export class Viking{

    public nom: string
    public sante: number
    private santeInitiale: number
    private _force: number
    private arme: Arme
    private defense: number

    constructor(
        nom: string,
        sante: number,
        santeInitiale: number,
        force: number,
        arme: Arme,
        defense: number
    ) {
        this.nom = nom
        this.sante = sante
        this.santeInitiale = santeInitiale
        this._force = force
        this.arme = arme
        this.defense = defense
    }

    public fight(otherViking: Viking) {
        const attackValue = this.getAttackValue()
        const soinsValue = this.getHealedValueFromAttaque(attackValue)
        otherViking.receiveAttack(attackValue)
        this.heal(soinsValue)
    }

    public get force(): number {
        return this._force + this.arme.force
    }

    private getAttackValue(): number {
        let attackValue = this.force
        if(Math.random() < 0.1) {
            attackValue *= 2
        }
        return attackValue
    }

    private getHealedValueFromAttaque(attaqueValue: number): number {
        let soinsValue = 0
        if(this.arme.isLameDeSang()){
            soinsValue = Math.floor(attaqueValue * 0.13)
        }
        return soinsValue
    }

    private heal(amount: number) {
        this.sante += amount
        if(this.sante > this.santeInitiale) {
            this.sante = this.santeInitiale
        }
    }

    private receiveAttack(amount: number){
        let totalLifeToLose = amount - this.defense
        if(totalLifeToLose > 0) {
            this.sante -= totalLifeToLose
        }
        if(this.sante < 0) {
            this.sante = 0
        }
    }

}