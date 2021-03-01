/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import {DebitOrderOperatorService} from '../debit-order-operator.service';

/**
 * Debit order provider data resolver.
 */
@Injectable()
export class DebitOrderOperatorsResolver implements Resolve<Object> {

  /**
   * @param {DebitOrderOperatorService}  service.
   */
  constructor(private debitOrderProviderService: DebitOrderOperatorService) {}

  /**
   * Returns the Tellers data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.debitOrderProviderService.getDebitOrderProviders();
  }

}
