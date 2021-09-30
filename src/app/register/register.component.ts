import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/validators/password-validator';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //atributos
  mensagem: string = "";
  isLoading: boolean = false;

  constructor(
    private loginService: LoginService //injeção de dependência
  ) { }

  //definindo o formulario
  formRegister = new FormGroup({

    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),

    //campo
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    //campo
    senha: new FormControl('', [
      passwordValidator
    ]),

    //campo
    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])
  });

  //objeto para acessar os campos do formulario na pagina HTML
  get form(): any {
    return this.formRegister.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.mensagem = "Processando requisição, por favor aguarde...";
    this.isLoading = true;

    this.loginService.postRegister(this.formRegister.value)
      .subscribe( //obter o retorno da API (promisse)
        (data: any) => { //retorno de sucesso da API
          this.mensagem = data.message;
          this.formRegister.reset();
          this.isLoading = false;
        },
        (e) => { //retorno de erro da API

          switch (e.status) {
            case 400:
              this.mensagem = e.error.errors.SenhaConfirmacao[0];
              break;

            case 422:
              this.mensagem = e.error;
              break;
          }

          this.isLoading = false;
        }
      )
  }

}
