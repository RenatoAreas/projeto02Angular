import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CadastroContatosComponent } from "./cadastro-contatos/cadastro-contatos.component";
import { ConsultaContatosComponent } from './consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from "./edicao-contatos/edicao-contatos.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro-contatos', component: CadastroContatosComponent },
  { path: 'consulta-contatos', component: ConsultaContatosComponent },
  { path: 'edicao-contatos/:id', component: EdicaoContatosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
