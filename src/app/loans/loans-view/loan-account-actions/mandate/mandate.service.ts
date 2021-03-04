import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from '../../../../settings/settings.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MandateService {

  constructor(private http: HttpClient, private settingsService: SettingsService) {
  }

  createMandate(mandate: any): Observable<any> {
    return this.http.post('/d-o/debit-order-mandates', mandate);
  }

  editMandate(id: any, mandate: any): Observable<any> {
    return this.http.post('/d-o/debit-order-mandates/edit', mandate);
  }

  deleteMandate(id: any): Observable<any> {
    return this.http.delete(`/d-o/debit-order-mandates/${id}`);
  }

  getMandate(id: any): Observable<any> {
    return this.http.get(`/d-o/debit-order-mandates/${id}`);
  }

  activateMandate(id: any): Observable<any> {
    return this.http.get(`/d-o/debit-order-mandates/activate/${id}`);
  }

  disableMandate(id: any): Observable<any> {
    return this.http.get(`/d-o/debit-order-mandates/disable/${id}`);
  }

  getMandateBatchItems(id: any): Observable<any> {
    return null;
  }

  getMandates(): Observable<any> {
    return this.http.get('/d-o/debit-order-mandates');
  }

  getMandatesByAccountNumber(accountNumber: any): Observable<any> {
    return this.http.get(`/d-o/debit-order-mandates/account-number/${accountNumber}`);
  }

}
