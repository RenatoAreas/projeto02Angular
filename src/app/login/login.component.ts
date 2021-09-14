import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
    console.log(this.formLogin.value);
  }

}
