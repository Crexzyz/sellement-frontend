import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public authService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        let request = req;

        request = req.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        })

        if(token == '') {
            return next.handle(request);
        }

        request = request.clone({
            setHeaders: {
                Authorization: `Token ${token}`
            }
        })

        return next.handle(request);
    }

}
