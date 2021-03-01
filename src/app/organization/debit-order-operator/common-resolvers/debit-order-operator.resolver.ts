/** Angular Imports */
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import {DebitOrderOperatorService} from '../debit-order-operator.service';

/**
 * Debit order provider data resolver.
 */
@Injectable()
export class DebitOrderOperatorResolver implements Resolve<Object> {

  /**
   * @param {DebitOrderOperatorService}  service.
   */
  constructor(private debitOrderProviderService: DebitOrderOperatorService) {}

  /**
   * Returns the Tellers data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.debitOrderProviderService.viewDebitOrderProvider(id);
  }

}
