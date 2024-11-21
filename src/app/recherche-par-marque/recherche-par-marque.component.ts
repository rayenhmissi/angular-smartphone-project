import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { SmartphoneService } from '../service/smartphone.service';
import { Smartphone } from '../model/smartphone.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
})
export class RechercheParMarqueComponent {
supprimersmartphone(_t29: Smartphone) {
throw new Error('Method not implemented.');
}
  idMar!:number;
  smart!:Smartphone[];
  marques!:Marque[];
  constructor(private smartservice:SmartphoneService){
  }
onchange(){
  this.smart=this.smartservice.rechercher(this.idMar);
}
ngOnInit():void{
  this.smart=this.smartservice.lister();
  this.marques=this.smartservice.lister_marque();
}
}
