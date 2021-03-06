/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { LoansService } from '../loans.service';
import {MandateService} from '../loans-view/loan-account-actions/mandate/mandate.service';

/**
 * Clients data resolver.
 */
@Injectable()
export class DebitOrderBatchItemsResolver implements Resolve<Object> {

    constructor(private mandateService: MandateService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const mandateId = route.paramMap.get('mandateId') || route.parent.paramMap.get('mandateId') || route.parent.parent.paramMap.get('mandateId');
        return this.mandateService.getMandateBatchItems(mandateId);
    }

}
