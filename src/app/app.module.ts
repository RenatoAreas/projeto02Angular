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
import { CadastroContatosComponent } from './cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './edicao-contatos/edicao-contatos.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { ChartModule } from 'angular-highcharts';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/TokenInterceptor';

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
    RegisterComponent,
    PasswordRecoverComponent
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
    ChartModule,
    HttpClientModule
  ],
  providers: [
    {
      //Configurando o uso do interceptor
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
