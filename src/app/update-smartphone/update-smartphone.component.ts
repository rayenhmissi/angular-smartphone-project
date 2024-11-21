import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SmartphoneService } from '../service/smartphone.service';
import { Smartphone } from '../model/smartphone.model';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-smartphone',
  templateUrl: './update-smartphone.component.html',
  styles:[],
})
export class UpdateSmartphoneComponent implements OnInit{
updatesmartphoe() {
throw new Error('Method not implemented.');
}
  currentSmartphone  = new Smartphone();
  marques!:Marque[];
  updatedMarId!:number;
  updatesmartphone() 
  { 
    this.currentSmartphone.marquesmartphone=this.smartphone.consulter_marque(this.updatedMarId);
    this.smartphone.update(this.currentSmartphone);
    this.router.navigate(["smarts"]);
  }
  constructor(private activatedRoute: ActivatedRoute,private router:Router,private smartphone: SmartphoneService) {
  }
  ngOnInit(): void {
    this.marques = this.smartphone.lister_marque();
    this.currentSmartphone = this.smartphone.consultersmartphone(this.activatedRoute.snapshot.params['id']);
    this.updatedMarId!= this.currentSmartphone.marquesmartphone?.idMar;

  }
}
