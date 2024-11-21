import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../service/smartphone.service';

@Component({
  selector: 'app-rechercher-par-modele',
  templateUrl: './rechercher-par-modele.component.html',
  styles: []
})
export class RechercherParModeleComponent implements OnInit {
  allsmart!: Smartphone[];
  searchTerm!: string;
  smart!:Smartphone[];
  constructor(private smartservice: SmartphoneService) {}

  ngOnInit(): void {
    this.allsmart=this.smartservice.lister();
  }
    onKeyUp(filterText : string){ 
      this.smart= this.allsmart.filter(item => 
      item.modele.toLowerCase().includes(filterText)); 
     }
}