import { Component,OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../service/smartphone.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
})
export class SmartphoneComponent implements OnInit{
  smart!: Smartphone[];  
  
  constructor(private smartservice: SmartphoneService){
  }
  ngOnInit():void{
    this.smart=this.smartservice.lister();
  }
  supprimersmartphone(sm:Smartphone){
    let c=confirm("ètes vous sur de supprimer ce smartphone ?");
    if (c){
      this.smartservice.supprimer(sm);
    }
  }
}
