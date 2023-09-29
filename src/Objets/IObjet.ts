//scr/ Objets/Iobets.ts
/*Faire une interface IObjet qui aura un prix, un poids et une méthode utiliser()*/
export interface IObjet{
    prix: number;
    poids: number;
    utiliser(): any; // Modifiez la signature pour qu'elle ne renvoie rien (void)
}