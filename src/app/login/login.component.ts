import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { PasswordRecoverComponent } from '../password-recover/password-recover.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //atributos
  mensagem: string = "";
  isLoading: boolean = false;

  //construtor da classe é utilizado para fazermos as
  //injeções de dependencia (inicializações)
  constructor(
    private loginService: LoginService,
    private dialog: MatDialog
  ) { }

  //função para abrir a janela modal da tela de cadastre-se
  openRegisterDialog() : void {
    //abrir a janela modal
    this.dialog.open(RegisterComponent, {
      width: '600px'
    });
  }

  //função para abrir a janela modal da tela de lembrete de senha
  openPasswordRecoverDialog() : void {
    //abrir a janela modal
    this.dialog.open(PasswordRecoverComponent, {
      width: '600px'
    });
  }

  //definindo o formulario
  formLogin = new FormGroup({

    //campo
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    //campo
    senha: new FormControl('', [
      Validators.required
    ]),
  });

  //objeto para acessar os campos do formulario na pagina HTML
  get form(): any {
    return this.formLogin.controls;
  }

  ngOnInit(): void {
  }

  //função para executar o SUBMIT do formulário
  onSubmit() {

    this.mensagem = "Processando requisição, por favor aguarde.";
    this.isLoading = true;

    this.loginService.postLogin(this.formLogin.value)
      .subscribe(
        (data:any) => {
          //função para gravar os dados do usuario
          //autenticado na localstorage
          this.loginService.signIn(data);
          window.location.href = "/home";
        },
        (e) => {
          switch(e.status){
            case 401:
              this.mensagem = e.error;
              break;
          }

          this.isLoading = false;
        }
      )
  }
}
