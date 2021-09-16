import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string = "";

  constructor(private loginService:LoginService) { }

  //definindo o formulário

  formLogin = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    senha : new FormControl('', [
      passwordValidator
    ]),
  });

  //Objeto para acessar os campos do formulário na pagina HTML
  get form(): any{
    return this.formLogin.controls;
  }

  ngOnInit(): void {
  }

  //função para executar o SUBMIT do formulário

  onSubmit(){
    var data = this.formLogin.value

    if(this.loginService.signIn(data)){
      //recarregar a pagina inicial do sistema 
      window.location.href = "/";

    }else{
      this.mensagem = "Acesso negado. Usuário inválido";
    }
  }

}
