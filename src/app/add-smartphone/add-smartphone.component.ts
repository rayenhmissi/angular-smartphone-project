import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphone.model'; // Corrected the class name to "Smartphone"
import { SmartphoneService } from '../service/smartphone.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.component.html',
})
export class AddSmartphoneComponent implements OnInit {
  newsmartphone = new Smartphone();
  marques!:Marque[];
  newIdmar!:number;
  newMarque!:Marque;
  router!: Router;
  my_form!:FormGroup;
  constructor(private smartservice: SmartphoneService,router:Router,private formbuild:FormBuilder) {}
  ngOnInit(): void {
    this.marques=this.smartservice.lister_marque();
    this.my_form=this.formbuild.group({
      id:['',[Validators.required]],
      modele:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      prix:['',[Validators.required,Validators.min(500)]],
      ram:['',[Validators.required]],
      stockage:['',[Validators.required]],
      marque:['',[Validators.required]],
      date:['',[Validators.required]],

    });
  }
  ajoutersmartphone(){
    this.newMarque=this.smartservice.consulter_marque(this.newIdmar);
    this.newsmartphone.marquesmartphone=this.newMarque;
    this.smartservice.ajouter(this.newsmartphone);
    this.router.navigate(["smarts"]);
  }
}
