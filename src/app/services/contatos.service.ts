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
    }
  ]
 
  constructor() { }
 
  //método para gravar um novo contato
  add(contato: Contato): void {
    const index = this.contatos.length;
    contato.idContato = this.getNextId();
 
    this.contatos[index] = contato;
  }
 
  //método para retornar todos os contatos
  getAll(): Contato[] {
    return this.contatos;
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