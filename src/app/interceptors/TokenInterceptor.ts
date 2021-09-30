import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //colocar as chamadas da API que não precisam de TOKEN
        //para todas as demais, o Angular irá enviar o token de autorização
        if (!request.url.includes('/Account/Login')
            && !request.url.includes('/Account/Register')
            && !request.url.includes('/Account/PasswordRecover')) {

            //obtendo o token do usuario autenticado
            var accessToken = JSON.parse(localStorage.getItem('user-auth') as string).accessToken;

            //enviando o TOKEN para a API
            request = request.clone({
                setHeaders: { Authorization: 'Bearer ' + accessToken }
            });
        }

        return next.handle(request);
    }
}
