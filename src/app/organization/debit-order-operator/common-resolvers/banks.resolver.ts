/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import {DebitOrderOperatorService} from '../debit-order-operator.service';
import {BankService} from '../bank.service';

/**
 * Debit order provider data resolver.
 */
@Injectable()
export class BanksResolver implements Resolve<Object> {

  /**
   * @param {BankService}  service.
   */
  constructor(private bankService: BankService) {}

  /**
   * Returns the data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.bankService.getBanks();
  }

}
