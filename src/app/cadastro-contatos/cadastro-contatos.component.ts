import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.css']
})
export class CadastroContatosComponent implements OnInit {

  mensagem: string = "";

  constructor(
    private contatosService: ContatosService
  ) { }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required]),
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {

    this.contatosService.postContato(this.formCadastro.value)
      .subscribe(
        (data: any) => {
          this.mensagem = data.message;
          event.currentTarget.reset();
        },
        (e) => {
          console.log(e);
        }
      )
  }

}
