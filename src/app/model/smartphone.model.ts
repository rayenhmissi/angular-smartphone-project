import { Marque } from "./marque.model";
export class Smartphone{
    idsmartphone?:number;
    marquesmartphone?:Marque;
    modele!:String;
    email!:String;
    ram?:number;
    stockage?:number;
    prixsmartphone?:number;
    dateCreation?:Date;
}