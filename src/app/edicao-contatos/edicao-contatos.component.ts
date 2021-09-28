import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContatosService } from '../services/contatos.service';
import { Contato } from '../models/contato.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-contatos',
  templateUrl: './edicao-contatos.component.html',
  styleUrls: ['./edicao-contatos.component.css']
})
export class EdicaoContatosComponent implements OnInit {

  mensagem: string = "";

  constructor(
    private contatosService: ContatosService,
    private activatedRoute: ActivatedRoute
  ) { }

  formEdicao = new FormGroup({
    idContato: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required]),
  });

  get form(): any {
    return this.formEdicao.controls;
  }

  ngOnInit(): void {

    //capturar o parametro id enviado pela URL
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //consultar os dados do contato atraves do id

    const contato = this.contatosService.getById(Number.parseFloat (id));

    //preencher os campos do formulario com os dados do contato
    this.formEdicao.controls.idContato.setValue(contato.idContato);
    this.formEdicao.controls.nome.setValue(contato.nome);
    this.formEdicao.controls.telefone.setValue(contato.telefone);
    this.formEdicao.controls.email.setValue(contato.email);
  }

  onSubmit(): void {

    this.contatosService.update(this.formEdicao.value);
    this.mensagem = "Dados atualizados com sucesso."
  }

}
