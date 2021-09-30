import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../services/contatos.service';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-consulta-contatos',
  templateUrl: './consulta-contatos.component.html',
  styleUrls: ['./consulta-contatos.component.css']
})
export class ConsultaContatosComponent implements OnInit {

  //atributo para armazenar os nomes dos cabeçalhos das colunas da tabela
  displayedColumns: string[] = ['idContato', 'nome', 'email', 'telefone', 'ações'];

  //atributo para armazenar os dados da consulta
  consulta_contatos: Contato[] = [];

  //atributo para armazenar o numero da página
  page = 1;

  //atributo para exibir mensagem na página
  mensagem: string = "";

  constructor(
    private contatosService: ContatosService //injeção de dependência
  ) { }

  ngOnInit(): void {
    //evento executado quando o componente é carregado
    this.contatosService.getContatos()
      .subscribe(
        (data) => {
          this.consulta_contatos = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
  }

  //método para realizar a exclusão do contato
  excluir(idContato: string): void {

    if (window.confirm(`Deseja realmente excluir o contato?`)) {

      this.contatosService.deleteContato(idContato)
        .subscribe(
          (data: any) => {
            this.mensagem = data.message;
            this.ngOnInit();
          },
          (e) => {
            console.log(e);
          }
        )

    }
  }

  //função para trocar de página
  handlePageChange(event: any): void {
    this.page = event;
  }

}
