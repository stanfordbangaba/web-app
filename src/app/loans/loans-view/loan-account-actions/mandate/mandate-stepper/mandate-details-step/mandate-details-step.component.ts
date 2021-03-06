import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../../../../../../organization/debit-order-operator/debit-order-operator.service';
import {LoansService} from '../../../../../loans.service';
import {AuthenticationService} from '../../../../../../core/authentication/authentication.service';
import {BankService} from '../../../../../../organization/debit-order-operator/bank.service';

@Component({
  selector: 'mifosx-mandate-details-step',
  templateUrl: './mandate-details-step.component.html',
  styleUrls: ['./mandate-details-step.component.scss']
})
export class MandateDetailsStepComponent implements OnInit {

  mandateForm: FormGroup;

  @Input() operatorOptions: any;
  @Input() clientOptions: any;

  debtorAccountTypes = ['DEFAULT', 'SAVINGS', 'PERSONAL'];

  bankOptions: any;

  minDate = new Date(2000, 1, 1);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private loansService: LoansService,
              private debitOrderOperatorService: DebitOrderOperatorService,
              private authenticationService: AuthenticationService,
              private bankService: BankService) {
    this.createDebitOrderMandateForm();

    if (!this.operatorOptions) {
      debitOrderOperatorService.getDebitOrderProviders()
        .subscribe(value => {
          if (value.responseCode === 'SUCCESS') {
            this.operatorOptions = value.entity;
          }
        });
    }

    if (!this.bankOptions) {
      bankService.getBanks()
        .subscribe(value => {
          this.bankOptions = value.entity;
        });
    }

    // Set the debtor information
    const loanId = this.route.snapshot.params['loanId'];
    this.loansService.getLoanAccountResource(loanId, 'guarantors')
      .subscribe(value => {
        this.clientOptions = value;
        const clientName = this.clientOptions.clientName.split(' ');
        this.mandateForm.patchValue({
          'firstName': clientName[0],
          'lastName': clientName[1],
          'lmsOperatorId': authenticationService.getCredentials().username
        });
      });
  }

  ngOnInit(): void {
  }

  createDebitOrderMandateForm() {
    this.mandateForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'referenceNumber': ['', [Validators.required]],
      'operatorExternalId': ['', [Validators.required]],
      'debtorAccountName': ['', [Validators.required]],
      'debtorAccountNumber': ['', [Validators.required]],
      'debtorAccountType': ['', [Validators.required]],
      'bankCode': ['', [Validators.required]],
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
