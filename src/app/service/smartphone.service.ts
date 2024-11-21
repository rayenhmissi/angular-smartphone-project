import { Injectable } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneComponent } from '../smartphone/smartphone.component';
import { Marque } from '../model/marque.model';
@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  s1!: Smartphone;
  smarts : Smartphone[];
  marques!:Marque[];
  smartphone_recherche!: Smartphone[];
  constructor() { 
    this.smarts=[
      {idsmartphone:10,marquesmartphone:{idMar:100,nomMar:"xiaomi"},modele:"redmi note 13",email:"xiaomi@gmail.com",ram:8,stockage:256,prixsmartphone:850,dateCreation: new Date ("01/07/2023")},
      {idsmartphone:11,marquesmartphone:{idMar:101,nomMar:"apple"},modele:"iphone 15",email:"apple@gmail.com",ram:6,stockage:128,prixsmartphone:4500,dateCreation: new Date ("10/09/2023")},
      {idsmartphone:12,marquesmartphone:{idMar:102,nomMar:"samsung"},modele:"galaxy a15",email:"samsung@gmail.com",ram:8,stockage:128,prixsmartphone:900,dateCreation: new Date ("10/11/2023")},
    ];
    this.marques=[
      {idMar:100,nomMar:"xiaomi"},
      {idMar:101,nomMar:"apple"},
      {idMar:102,nomMar:"samsung"},
    ]  
  }
  lister_marque():Marque[]{
    return this.marques;
  }
  consulter_marque(id:number):Marque{
    return this.marques.find(mar => mar.idMar ==id )!;
  }
  lister():Smartphone[]{
      return this.smarts;
   }
  ajouter(smartphone:Smartphone){
    this.smarts.push(smartphone);
  } 
  supprimer(sm:Smartphone){
    const index=this.smarts.indexOf(sm,0);
    if (index > -1){
      this.smarts.splice(index,1);
    }
  }
  consultersmartphone(id:number): Smartphone{     
    this.s1 =  this.smarts.find(s => s.idsmartphone == id)!; 
    return this.s1; 
    }
    triersmarts(){ 
      this.smarts = this.smarts.sort((n1,n2) => { 
        if (n1.idsmartphone! > n2.idsmartphone!) { 
            return 1; 
        } 
       if (n1.idsmartphone! < n2.idsmartphone!) { 
            return -1; 
        } 
      return 0; 
    });
  }
    update(s:Smartphone) { 
      this.supprimer(s); 
      this.ajouter(s);
      this.triersmarts();
    }
    rechercher(idMar:number){
      this.smartphone_recherche=[];
      this.smarts.forEach((cur, index) => { 
        if(idMar == cur.marquesmartphone?.idMar) { 
            console.log("cur "+cur); 
            this.smartphone_recherche.push(cur); 
          } 
      }); 
       return this.smartphone_recherche; 
    }
}
