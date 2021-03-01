import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../../debit-order-operator.service';

@Component({
  selector: 'mifosx-debit-order-operator-bank-step',
  templateUrl: './debit-order-operator-bank-step.component.html',
  styleUrls: ['./debit-order-operator-bank-step.component.scss']
})
export class DebitOrderOperatorBankStepComponent implements OnInit {

  @Input() bankOptions: any;
  bankForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private debitOrderProviderService: DebitOrderOperatorService) {
  }

  ngOnInit(): void {
    this.createDebitOrderProviderForm();
    this.setOptions();
  }

  setOptions() {
      // console.log(this.bankOptions);
  }

  createDebitOrderProviderForm() {
    this.bankForm = this.formBuilder.group({
      'accountName': ['', [Validators.required]],
      'accountNumber': ['', [Validators.required]],
      'bankCode': ['', [Validators.required]]
    });
  }

  get debitOrderOperatorBankDetails() {
    const provider = this.bankForm.value;
    return provider;
  }
}
