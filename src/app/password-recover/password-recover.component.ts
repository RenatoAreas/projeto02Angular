import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  //atributos
  mensagem: string = "";
  isLoading: boolean = false;

  constructor(
    private loginService: LoginService
  ) { }

  //definindo o formulario
  formPasswordRecover = new FormGroup({

    //campo
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])

  });

  //objeto para acessar os campos do formulario na pagina HTML
  get form(): any {
    return this.formPasswordRecover.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.mensagem = "Processando requisição, por favor aguarde...";
    this.isLoading = true;

    this.loginService.postPasswordRecover(this.formPasswordRecover.value)
      .subscribe( //obter o retorno da API (promisse)
        (data: any) => { //retorno de sucesso da API
          this.mensagem = data.message;
          this.formPasswordRecover.reset();
          this.isLoading = false;
        },
        (e) => { //retorno de erro da API

          switch (e.status) {
            case 422:
              this.mensagem = e.error;
              break;
          }

          this.isLoading = false;
        }
      )
  }

}
