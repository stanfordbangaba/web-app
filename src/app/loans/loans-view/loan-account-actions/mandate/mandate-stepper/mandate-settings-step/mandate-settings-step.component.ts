import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../../../../../../organization/debit-order-operator/debit-order-operator.service';

@Component({
  selector: 'mifosx-mandate-settings-step',
  templateUrl: './mandate-settings-step.component.html',
  styleUrls: ['./mandate-settings-step.component.scss']
})
export class MandateSettingsStepComponent implements OnInit {

  @Input() clientOptions: any;

  settingsForm: FormGroup;

  adjustmentAmountTypes = ['AMOUNT', 'RATE'];

  mandateValueTypes = ['FIXED', 'VARIABLE', 'USAGE'];

  installmentOccurrences = ['OOFF', 'RCUR'];

  debitOrderFrequencies = ['MONTHLY', 'QUARTERLY', 'ANNUALLY', 'BIANNUALLY', 'MONTH_END'];

  minDate = new Date(2000, 1, 1);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private debitOrderProviderService: DebitOrderOperatorService) {
  }

  ngOnInit(): void {
    this.createDebitOrderProviderForm();
    this.setOptions();
    this.setConditionalControls();
  }

  setOptions() {
    // Set the debtor information
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
