/** Angular Imports */
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

/** rxjs Imports */
import {Observable} from 'rxjs';

/** Environment Configuration */
import {environment} from 'environments/environment';

/**
 * Http request interceptor to prefix a request with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  /**
   * Intercepts a Http request and prefixes it with `environment.serverUrl`.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.substring(0, 4) === '/d-o') {
      const url = request.url.substring(4);
      // console.log(`DEBIT ORDER URL: ${url}`);
      request = request.clone({url: environment.debitOrderServerUrl + url});
    } else {
      request = request.clone({url: environment.serverUrl + request.url});
    }
    return next.handle(request);
  }

}
