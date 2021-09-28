import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  //criando uma lista de contatos
  contatos: Contato[] = [
    {
      idContato: 0,
      nome: 'Renato dos Santos',
      email: 'renatosantos@gmail.com',
      telefone: '(21) 99900-0011'
    },
    {
      idContato: 1,
      nome: 'Sergio Mendes',
      email: 'sergio.coti@gmail.com',
      telefone: '(21) 99911-1100'
    },
    {
      idContato: 2,
      nome: 'João Pedro',
      email: 'joaopedro@gmail.com',
      telefone: '(21) 99910-2244'
    },
    {
      idContato: 3,
      nome: 'Ana Maria',
      email: 'anamaria@gmail.com',
      telefone: '(21) 99923-9988'
    },
    {
      idContato: 4,
      nome: 'Carlos Eduardo',
      email: 'carloseduardo@gmail.com',
      telefone: '(21) 99943-1230'
    },
    {
      idContato: 5,
      nome: 'José Eduardo',
      email: 'joseeduardo@gmail.com',
      telefone: '(21) 99901-0932'
    }
  ]

  constructor() { }

  //método para gravar um novo contato
  add(contato: Contato): void {
    const index = this.contatos.length;
    contato.idContato = this.getNextId();

    this.contatos[index] = contato;
  }

  //metodo para excluir um contato
  delete(contato: Contato){
    this.contatos.splice(this.contatos.indexOf(contato), 1);
  }

  //metodo para atualizar o contato
  update(contato:Contato){
    const index = this.contatos.findIndex(c => c.idContato === contato.idContato);

    //substituir o contato na lista
    this.contatos[index] = contato;
  }

  //método para retornar todos os contatos
  getAll(): Contato[] {
    return this.contatos;
  }

  //método para retornar 1 contato atraves do id
  getById(idContato: number): Contato{
    const index = this.contatos.findIndex(c => c.idContato === idContato);

    return this.contatos[index];
  }

  //método para gerar o id do contato
  getNextId(): number {
    let maior = 0;
    this.contatos.forEach(function (item) {
      if (maior === 0) maior = item.idContato;
      if (maior < item.idContato) maior = item.idContato;
    });

    return maior + 1;
  }

}
