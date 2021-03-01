import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SettingsService} from '../../settings/settings.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DebitOrderOperatorService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient, private settingsService: SettingsService) {
  }

  getDebitOrderProviders(): Observable<any> {
    return this.http.get('/d-o/debit-order-operators');
  }

  createDebitOrderProvider(provider: any): Observable<any> {
    return this.http.post(`/d-o/debit-order-operators`, provider);
  }

  editDebitOrderProvider(id: any, provider: any): Observable<any> {
    return this.http.put(`/d-o/debit-order-operators/${id}`, provider);
  }

  viewDebitOrderProvider(id: any): Observable<any> {
    return this.http.get(`/d-o/debit-order-operators/${id}`);
  }

  approveDebitOrderProvider(id: any): Observable<any> {
    return this.http.get(`/d-o/debit-order-operators/activate/${id}`);
  }

  deleteDebitOrderProvider(id: any): Observable<any> {
    return this.http.delete(`/d-o/debit-order-operators/${id}`);
  }
}
