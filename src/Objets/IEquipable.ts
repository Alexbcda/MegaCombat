import { Personnage } from "../Personnage";
import { IObjet } from "./IObjet";

// Interface pour définir les attributs communs à tous les équipements
interface IEquipable extends IObjet {
  niveauRequis: number;
  // Ajoutez d'autres attributs communs si nécessaire
}