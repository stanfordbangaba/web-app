import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MandateService} from '../mandate.service';
import {MandateDetailsStepComponent} from '../mandate-stepper/mandate-details-step/mandate-details-step.component';
import {MandateSettingsStepComponent} from '../mandate-stepper/mandate-settings-step/mandate-settings-step.component';
import {DebitOrderOperatorService} from '../../../../../organization/debit-order-operator/debit-order-operator.service';
import {LoansService} from '../../../../loans.service';

@Component({
  selector: 'mifosx-create-mandate',
  templateUrl: './create-mandate.component.html',
  styleUrls: ['./create-mandate.component.scss']
})
export class CreateMandateComponent implements OnInit {

  @Input() dataObject: any;

  @ViewChild(MandateDetailsStepComponent, {static: true}) mandateDetailsStepComponent: MandateDetailsStepComponent;
  @ViewChild(MandateSettingsStepComponent, {static: true}) mandateSettingsStepComponent: MandateSettingsStepComponent;

  operatorOptions: any;
  clientOptions: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private debitOrderOperatorService: DebitOrderOperatorService,
              private mandateService: MandateService,
              private loansService: LoansService) {

    this.clientOptions = this.dataObject;

    if (this.clientOptions) {
      debitOrderOperatorService.getDebitOrderProviders()
        .subscribe(value => {
          if (value.responseCode === 'SUCCESS') {
            this.operatorOptions = value.entity;
          }
        });
    } else {
      const loanId = this.route.snapshot.params['loanId'];
      this.loansService.getLoanAccountResource(loanId, 'guarantors')
        .subscribe(value => {
          this.clientOptions = value;
          console.log(`DATA IN CREATE :: ${JSON.stringify(this.clientOptions)}`);
        });
    }
  }

  ngOnInit(): void {
  }

  get debitOrderMandateDetailsForm() {
    return this.mandateDetailsStepComponent.mandateForm;
  }

  /**
   * Retrieves the object
   */
  get debitOrderMandate() {
    return {
      ...this.mandateDetailsStepComponent.debitOrderMandateDetails,
      ...this.mandateSettingsStepComponent.debitOrderMandateSettings
    };
  }

  /**
   * Submits the create form.
   */
  submit() {

    this.mandateService.createMandate(this.debitOrderMandate).subscribe((response: any) => {
      this.router.navigate(['../../mandate/', response.entity.id, 'details'], {relativeTo: this.route});
    });
  }

}
