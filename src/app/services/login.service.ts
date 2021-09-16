import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  //atributo utilizado para armazenar 
  //os dados do usuário autenticado no sistema
  user_data: any = {
    nomeUsuario: '',
    emailUsuario: '',
    dataHora: ''
  };
 
  //atributo para dar nome aos dados que serão
  //gravados do usuario em sessão no sistema
  USER_AUTH: string = "user-auth";
 
  constructor() { }
 
  //função para autenticar o usuario
  signIn(data: any): boolean {
 
    if ("admin@gmail.com" == data.email && "@Admin123" == data.senha) {
 
      //criar um objeto com os dados do usuario autenticado
      this.user_data = {
        nomeUsuario: 'Administrador',
        emailUsuario: 'admin@gmail.com',
        dataHora: new Date()
      };
 
      //gravar os dados em local storage (memória do navegador)
      localStorage.setItem(this.USER_AUTH, JSON.stringify(this.user_data));
 
      return true; //retornar sucesso!
    }
 
    return false; //retornar falha!
  }
 
  //função para fazer o logout do usuario
  signOut(): void {
    //remover o conteudo gravado na localstorage
    localStorage.removeItem(this.USER_AUTH);
  }
 
  //função para verificar se o usuario esta autenticado
  isAuthenticated(): boolean {
    //obtendo os dados gravados na localstorage
    var data = localStorage.getItem(this.USER_AUTH);
    //verificando se o conteudo não esta vazio
    return data != null && data != undefined;
  }
 
  //função para retornar os dados do usuario autenticado
  getUserData(): any {
    //lendo os dados da locaostorage como JSON
    var data = JSON.parse(localStorage.getItem(this.USER_AUTH) as string);
    return data; //retornandos os dados obtidos da local storage
  }
}