import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
 
@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {
 
  //atributos
  nome: string = "";
  email: string = "";
  data: string = "";
 
  constructor(
    private loginService: LoginService
  ) { }
 
  ngOnInit(): void {
    
    //verificar se o usuario esta autenticado
    if (this.loginService.isAuthenticated()) {
 
      //capturar os dados do usuario autenticado
      var item = this.loginService.getUserData();
 
      //exibir os dados na tela
      this.nome = item.nomeUsuario;
      this.email = item.emailUsuario;
      this.data = item.dataHora;
    }
  }
 
}