import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from '../../settings/settings.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient, private settingsService: SettingsService) {
  }

  getBanks(): Observable<any> {
    return this.http.get('/d-o/banks');
  }

  viewBank(id: any): Observable<any> {
    return this.http.get(`/d-o/banks/${id}`);
  }

}
