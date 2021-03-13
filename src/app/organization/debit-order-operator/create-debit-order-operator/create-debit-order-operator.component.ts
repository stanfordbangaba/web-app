import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../debit-order-operator.service';
import {ClientsService} from '../../../clients/clients.service';
import {SettingsService} from '../../../settings/settings.service';
import {DebitOrderOperatorGeneralStepComponent} from '../debit-order-operator-stepper/debit-order-operator-general-step/debit-order-operator-general-step.component';
import {DebitOrderOperatorBankStepComponent} from '../debit-order-operator-stepper/debit-order-operator-bank-step/debit-order-operator-bank-step.component';

@Component({
  selector: 'mifosx-create-debit-order-provider',
  templateUrl: './create-debit-order-operator.component.html',
  styleUrls: ['./create-debit-order-operator.component.scss']
})
export class CreateDebitOrderOperatorComponent implements OnInit {

  @ViewChild(DebitOrderOperatorGeneralStepComponent, {static: true}) debitOrderGeneralStep: DebitOrderOperatorGeneralStepComponent;
  @ViewChild(DebitOrderOperatorBankStepComponent, {static: true}) debitOrderBankStep: DebitOrderOperatorBankStepComponent;

  bankOptions: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private debitOrderOperatorService: DebitOrderOperatorService) {
    this.route.data.subscribe((data: { bankData: any }) => {
      this.bankOptions = data.bankData.entity;
    });
  }

  ngOnInit(): void {
  }

  get debitOrderOperatorGeneralForm() {
    return this.debitOrderGeneralStep.providerForm;
  }

  /**
   * Retrieves the object
   */
  get debitOrderOperator() {
    return {
      ...this.debitOrderGeneralStep.debitOrderOperatorGeneralDetails,
      ...this.debitOrderBankStep.debitOrderOperatorBankDetails
    };
  }

  /**
   * Submits the create form.
   */
  submit() {

    this.debitOrderOperatorService.createDebitOrderProvider(this.debitOrderOperator).subscribe((response: any) => {
      this.router.navigate(['../', response.entity.id, 'general'], {relativeTo: this.route});
    });
  }

}
