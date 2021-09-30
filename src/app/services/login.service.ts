import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //atributo para armazenar o endereço do serviço
  endpoint: string = environment.apiUrl + "/Account";

  //atributo utilizado para armazenar
  //os dados do usuário autenticado no sistema
  user_data: any = {
    nomeUsuario: '',
    emailUsuario: '',
    dataHora: '',
    accessToken: ''
  };

  //atributo para dar nome aos dados que serão
  //gravados do usuario em sessão no sistema
  USER_AUTH: string = "user-auth";

  constructor(
    private httpClient: HttpClient
  ) { }

  postLogin(data: any) {
    return this.httpClient.post(this.endpoint + "/Login", data);
  }

  postRegister(data: any) {
    return this.httpClient.post(this.endpoint + "/Register", data);
  }

  postPasswordRecover(data: any) {
    return this.httpClient.post(this.endpoint + "/PasswordRecover", data);
  }

  signIn(data: any): boolean {

    //criar um objeto com os dados do usuario autenticado
    this.user_data = {
      nomeUsuario: data.usuario,
      emailUsuario: data.email,
      dataHora: new Date(),
      accessToken: data.accessToken
    };

    //gravar os dados em local storage (memória do navegador)
    localStorage.setItem(this.USER_AUTH, JSON.stringify(this.user_data));

    return true; //retornar sucesso!
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
