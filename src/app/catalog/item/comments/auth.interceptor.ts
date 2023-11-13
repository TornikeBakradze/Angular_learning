import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const httpReq=request.clone(
      {headers: request.headers.set("authorization", "S1Sasfasgf21gagag2as129dsjfsdjAasasfa#$FSAasaf")}
    )

    return next.handle(httpReq);
  }
}
