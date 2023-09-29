import { IObjet } from "./IObjet";


abstract class Equipement implements IObjet{
  private _prix: number;
  private _poids: number;
  private _level: number;
  private _nom: string;
  
  constructor(
    prix: number,
    poids: number,
    level: number,
    nom: string
  ) {
    this._prix = prix;
    this._poids = poids;
    this._level = level;
    this._nom = nom;
  }

  // Méthode abstraite pour utiliser l'équipement, à implémenter dans les sous-classes
  public abstract utiliser(): void;

  // Implémentation des méthodes de l'interface IObjet
  public getPrix(): number {
    return this._prix;
  }

  public getPoids(): number {
    return this._poids;
  }
}
