import { ContatosService } from './../services/contatos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.css']
})
export class CadastroContatosComponent implements OnInit {

  mensagem : string = "";

  constructor(private contatosService : ContatosService) { }

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

  onSubmit(event : any) : void {

    let contato: Contato = {
      idContato: 0,
      nome: this.formCadastro.value.nome,
      email: this.formCadastro.value.email,
      telefone: this.formCadastro.value.telefone
    };

    this.contatosService.add(contato);

    this.mensagem = `Contato '${contato.nome}'gravado com sucesso`;
  
    event.currentTarget.reset();
  }

}
