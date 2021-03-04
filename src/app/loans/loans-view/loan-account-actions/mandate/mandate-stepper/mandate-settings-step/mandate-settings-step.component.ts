import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, LoadChildren, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../../../../../../organization/debit-order-operator/debit-order-operator.service';
import {LoansService} from '../../../../../loans.service';

@Component({
  selector: 'mifosx-mandate-settings-step',
  templateUrl: './mandate-settings-step.component.html',
  styleUrls: ['./mandate-settings-step.component.scss']
})
export class MandateSettingsStepComponent implements OnInit {

  clientOptions: any;

  settingsForm: FormGroup;

  adjustmentAmountTypes = ['AMOUNT', 'RATE'];

  mandateValueTypes = ['FIXED', 'VARIABLE', 'USAGE'];

  installmentOccurrences = ['OOFF', 'RCUR'];

  debitOrderFrequencies = ['MONTHLY', 'QUARTERLY', 'ANNUALLY', 'BIANNUALLY', 'MONTH_END'];

  minDate = new Date(2000, 1, 1);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private loansService: LoansService) {
  }

  ngOnInit(): void {
    this.createDebitOrderProviderForm();
    this.setOptions();
    this.setConditionalControls();
  }

  setOptions() {
    // Set the debtor information
    const loanId = this.route.snapshot.params['loanId'];
    this.loansService.getLoanAccountResource(loanId, 'guarantors')
      .subscribe(value => {
        this.clientOptions = value;
        this.settingsForm.patchValue({
          'accountNumber': this.clientOptions.accountNo,
          'debtorIdentification': this.clientOptions.externalId
        });
      });
  }

  setConditionalControls() {
    this.settingsForm.get('adjustmentAmountType').valueChanges
      .subscribe(value => {
        if (value === 'AMOUNT') {
          this.settingsForm.addControl('adjustmentAmount', new FormControl(false));
        } else {
          this.settingsForm.removeControl('adjustmentAmount');
        }
      });
  }

  createDebitOrderProviderForm() {
    this.settingsForm = this.formBuilder.group({
      'authorizationDate': ['', [Validators.required]],
      'firstCollectionDay': ['', [Validators.required]],
      'collectionDay': ['', [Validators.required]],
      'debitOrderFrequency': ['', [Validators.required]],
      'additionalFee': [''],
      'firstCollectionAmount': [''],
      'collectionAmount': [''],
      'maximumCollectionAmount': [''],
      'adjustmentAmountType': [''],
      'adjustmentRate': [''],
      'adjustmentAmount': [''],
      'accountNumber': [''],
      'debtorIdentification': [''],
      'mandateValueType': [''],
      'installmentOccurrence': [''],
      'debtorIdentificationType': ['DEFAULT'],
    });
  }

  get debitOrderMandateSettings() {
    const provider = this.settingsForm.value;
    return provider;
  }

}
