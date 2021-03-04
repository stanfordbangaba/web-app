import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../../../../../../organization/debit-order-operator/debit-order-operator.service';

@Component({
  selector: 'mifosx-mandate-details-step',
  templateUrl: './mandate-details-step.component.html',
  styleUrls: ['./mandate-details-step.component.scss']
})
export class MandateDetailsStepComponent implements OnInit {

  mandateForm: FormGroup;

  @Input() operatorOptions: any;
  @Input() clientOptions: any;

  minDate = new Date(2000, 1, 1);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private debitOrderOperatorService: DebitOrderOperatorService) {
    this.createDebitOrderMandateForm();

    if (!this.operatorOptions) {
      debitOrderOperatorService.getDebitOrderProviders()
        .subscribe(value => {
          if (value.responseCode === 'SUCCESS') {
            this.operatorOptions = value.entity;
          }
        });
    }

    this.mandateForm.patchValue({
      'debtorTelephoneContactDetails': [''],
      'debtorEmailContactDetails': [''],
    });
  }

  ngOnInit(): void {
  }

  createDebitOrderMandateForm() {
    this.mandateForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'referenceNumber': ['', [Validators.required]],
      'lmsOperatorId': ['', [Validators.required]],
      'contractReference': ['', [Validators.required]],
      'entryClass': [''],
      'debtorTelephoneContactDetails': [''],
      'debtorEmailContactDetails': [''],
      'startDate': ['', Validators.required],
      'endDate': ['', Validators.required]
    });
  }

  get debitOrderMandateDetails() {
    const mandate = this.mandateForm.value;
    return mandate;
  }

}
