import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercherParModeleComponent } from './rechercher-par-modele/rechercher-par-modele.component';

const routes: Routes = [
  {path:"smartphone",component:SmartphoneComponent},
  {path:"add-smartphone",component:AddSmartphoneComponent},
  {path:"updatesmartphone/:id",component:UpdateSmartphoneComponent},
  {path:"recherche-par-marque",component:RechercheParMarqueComponent},
  {path:"rechercher-par-modele",component:RechercherParModeleComponent},
  {path:"",redirectTo:"smartphone",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
