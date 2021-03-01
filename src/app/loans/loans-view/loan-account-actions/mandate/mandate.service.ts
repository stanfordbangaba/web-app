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
    return null;
  }

  editMandate(id: any, mandate: any): Observable<any> {
    return null;
  }

  deleteMandate(id: any): Observable<any> {
    return null;
  }

  getMandate(id: any): Observable<any> {
    return null;
  }

  activateMandate(id: any): Observable<any> {
    return null;
  }

  disableMandate(id: any): Observable<any> {
    return null;
  }

  getMandateBatchItems(id: any): Observable<any> {
    return null;
  }

  getMandates(): Observable<any> {
    return null;
  }

}
