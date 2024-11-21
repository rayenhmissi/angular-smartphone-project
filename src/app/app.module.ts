import { Injector, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Smartphone } from './model/smartphone.model';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercherParModeleComponent } from './rechercher-par-modele/rechercher-par-modele.component';
@NgModule({
  declarations: [
    AppComponent,
    SmartphoneComponent,
    AddSmartphoneComponent,
    UpdateSmartphoneComponent,
    RechercheParMarqueComponent,
    RechercherParModeleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
