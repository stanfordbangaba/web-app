import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../../debit-order-operator.service';

@Component({
  selector: 'mifosx-debit-order-operator-general-step',
  templateUrl: './debit-order-operator-general-step.component.html',
  styleUrls: ['./debit-order-operator-general-step.component.scss']
})
export class DebitOrderOperatorGeneralStepComponent implements OnInit {

  providerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private debitOrderProviderService: DebitOrderOperatorService) {
    this.createDebitOrderProviderForm();
  }

  ngOnInit(): void {
  }

  createDebitOrderProviderForm() {
    this.providerForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'shortName': ['', [Validators.required]],
      'externalId': ['', [Validators.required]],
      'description': ['']
    });
  }

  get debitOrderOperatorGeneralDetails() {
    const provider = this.providerForm.value;
    return provider;
  }

}
