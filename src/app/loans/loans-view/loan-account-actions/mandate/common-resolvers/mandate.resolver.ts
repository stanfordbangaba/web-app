/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';
import {MandateService} from '../mandate.service';

/** Custom Services */

/**
 * Clients data resolver.
 */
@Injectable()
export class MandateResolver implements Resolve<Object> {

    /**
     * @param {MandateService} MandateService Mandate service.
     */
    constructor(private mandateService: MandateService) { }

    /**
     * Returns the Mandate with Association data.
     * @returns {Observable<any>}
     */
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = route.paramMap.get('mandateId') || route.parent.paramMap.get('mandateId') || route.parent.parent.paramMap.get('mandateId');
        return this.mandateService.getMandate(id);
    }

}
