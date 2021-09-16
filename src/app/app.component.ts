import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  //atributo
  isLoggedIn: boolean = false;
 
  //método construtor
  constructor(
    private loginService: LoginService
  ) { }
 
  //função executada sempre que 
  //o componente é carregado
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isAuthenticated();
  }
 
  //função para fazer o logout do usuário
  logout() : void {
    //verificar se o usuario deseja sair do sistema
    if(window.confirm('Deseja realmente sair do sistena?')){
      this.loginService.signOut(); //remove a autenticação
      //recarregar a página inicial do sistema
      window.location.href = "/";
    }
  }
 
}
