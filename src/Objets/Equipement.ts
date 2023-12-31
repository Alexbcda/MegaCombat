import { Personnage } from "../Personnage";
import { IObjet } from "./IObjet";


export abstract class Equipement implements IObjet {
    
  private _prix: number;
  private _poids: number;
  private _level: number;
  private _name: string;


  abstract equip(personnage : Personnage) : any

  use(personnage : Personnage): any {
      this.equip(personnage);
      console.log("L'objet est équipé")
  }

  constructor(prix : number, poids : number, level : number, name : string) { 
      this._prix = prix;
      this._poids = poids;
      this._level = level;
      this._name = name;
  }

  utiliser() {
    throw new Error("Method not implemented.");
  }
  

  public get prix(): number {
      return this._prix;
  }

  public set prix(value: number) {
      this._prix = value;
  }

  public get poids(): number {
      return this._poids;
  }

  public set poids(value: number) {
      this._poids = value;
  }

  public get level(): number {
      return this._level;
  }

  public set level(value: number) {
      this._level = value;
  }

  public get name(): string {
      return this._name;
  }
  public set name(value: string) {
      this._name = value;
  }
}