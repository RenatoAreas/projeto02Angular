import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { CadastroContatosComponent } from './cadastro-contatos/cadastro-contatos.component'
import { NgxMaskModule,IConfig } from 'ngx-mask';
import { ConsultaContatosComponent } from './consulta-contatos/consulta-contatos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EdicaoContatosComponent } from './edicao-contatos/edicao-contatos.component';
import { ChartModule } from 'angular-highcharts';
export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    DadosUsuarioComponent,
    CadastroContatosComponent,
    ConsultaContatosComponent,
    EdicaoContatosComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
