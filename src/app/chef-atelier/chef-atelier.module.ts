import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefAtelierRoutingModule } from './chef-atelier-routing.module';
import { HeaderComponent } from "./components/header/header.component";
import { FicheEntretienComponent } from "../shared/components/fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { ListPieceComponent } from "../shared/components/piece/components/list-piece/list-piece.component";
import { EditPieceComponent } from "../shared/components/piece/components/edit-piece/edit-piece.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPieceComponent } from "../shared/components/piece/components/add-piece/add-piece.component";
import { CreerClientComponent } from './components/clients/creer-client/creer-client.component';
import { ListeClientComponent } from './components/clients/liste-client/liste-client.component';
import { RecherchePiecePipe } from "../shared/components/piece/recherche-piece.pipe";
import { RechercheFichePipe } from "../shared/components/fiche-entretien/recherche-fiche.pipe";
import { ModifierClientComponent } from './components/clients/modifier-client/modifier-client.component';
import { FicheTacheComponent } from '../shared/components/tache/components/fiche-tache/fiche-tache.component';
import { RechercheTachePipe } from '../shared/components/tache/recherche-tache.pipe';
import { ListTacheComponent } from '../shared/components/tache/components/list-tache/list-tache.component';
import { RechercheClientPipe } from './components/clients/recherche-client.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FicheEntretienComponent,
    ChefAtelierComponent,
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    CreerClientComponent,
    ListTacheComponent,
    RecherchePiecePipe,
    RechercheFichePipe,
    RechercheTachePipe,
    ListeClientComponent,
    ModifierClientComponent,
    FicheTacheComponent,
    RechercheClientPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChefAtelierRoutingModule,
    FormsModule
  ]
})
export class ChefAtelierModule { }
