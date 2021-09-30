import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  endpoint: string = environment.apiUrl + "/Contatos";

  constructor(
    private httpClient: HttpClient
  ) { }

  postContato(data: any) {
    return this.httpClient.post(this.endpoint, data);
  }

  putContato(data: any) {
    return this.httpClient.put(this.endpoint, data);
  }

  deleteContato(id: string) {
    return this.httpClient.delete(this.endpoint + "/" + id);
  }

  getContatos() {
    return this.httpClient.get(this.endpoint);
  }

  getContatoById(id: string) {
    return this.httpClient.get(this.endpoint + "/" + id);
  }
}
