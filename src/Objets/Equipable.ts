import { Personnage } from "../Personnage";

// Classe abstraite de base pour les équipements
export abstract class Equipable implements IEquipable {
    private _niveauRequis: number;
    private _prix: number;
    private _poids: number;
  
    constructor(niveauRequis: number, prix: number, poids: number) {
      this._niveauRequis = niveauRequis;
      this._prix = prix;
      this._poids = poids;
    }
  
    public peutEquiper(personnage: Personnage): boolean {
      return personnage.getNiveau() >= this._niveauRequis;
    }
  
    public getNiveauRequis(): number {
      return this._niveauRequis;
    }
  
    public getPrix(): number {
      return this._prix;
    }
  
    public getPoids(): number {
      return this._poids;
    }
  
    // Méthode abstraite à implémenter dans les sous-classes
    public abstract utiliser(personnage: Personnage): void;
  }
  