import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MandateService} from '../mandate.service';
import {BankService} from '../../../../../organization/debit-order-operator/bank.service';

@Component({
  selector: 'mifosx-edit-mandate',
  templateUrl: './edit-mandate.component.html',
  styleUrls: ['./edit-mandate.component.scss']
})
export class EditMandateComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  mandateForm: FormGroup;

  mandateData: any;

  externalCodes: any;

  bankOptions: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private bankService: BankService,
              private mandateService: MandateService) {
    this.route.data.subscribe((data: { mandateData: any }) => {
      this.mandateData = data.mandateData.entity;
    });


    if (!this.bankOptions) {
      bankService.getBanks()
        .subscribe(value => {
          this.bankOptions = value.entity;
        });
    }
  }

  ngOnInit(): void {
    this.editMandateForm();
    this.initializeExternalCodes();
  }

  editMandateForm() {
    this.mandateForm = this.formBuilder.group({
      'date': ['', Validators.required],
      'collectionAmount': [this.mandateData.collectionAmount, Validators.required],
      'firstCollectionAmount': [this.mandateData.firstCollectionAmount, Validators.required],
      'firstCollectionDay': [this.mandateData.firstCollectionDay, Validators.required],
      'collectionDay': [this.mandateData.collectionDay, Validators.required],
      'maximumCollectionAmount': [this.mandateData.maximumCollectionAmount, Validators.required],
      'trackingIndicator': [this.mandateData.trackingIndicator, Validators.required],
      'debtorAccountNumber': [this.mandateData.bankAccount.accountNumber, Validators.required],
      'debtorAccountName': [this.mandateData.bankAccount.accountName, Validators.required],
      'bankCode': [this.mandateData.bankAccount.bank.code, Validators.required],
      'reason': ['', Validators.required]
    });
  }

  submit() {
    const mandate = this.mandateForm.value;
    mandate.id = this.mandateData.id;
    this.mandateService.editMandate(this.mandateData.id, mandate)
      .subscribe(response => {
        this.router.navigate(['../../mandate', this.mandateData.id, 'details'], {relativeTo: this.route});
      });
  }

  initializeExternalCodes() {
    this.externalCodes = [
      new ECode({code: 'AC01', value: 'IncorrectAccountNumber'}),
      new ECode({code: 'AC04', value: 'ClosedAccountNumber'}),
      new ECode({code: 'AC06', value: 'BlockedAccount'}),
      new ECode({code: 'AG01', value: 'TransactionForbidden'}),
      new ECode({code: 'RR04', value: 'RegulatoryReason '}),
      new ECode({code: 'MD20', value: 'MandateExpired'}),
      new ECode({code: 'MD11', value: 'UnrecognisedAgent'}),
      new ECode({code: 'AM05', value: 'Duplication'}),
      new ECode({code: 'MD16', value: 'RequestedByCustomer'}),
      new ECode({code: 'MD10', value: 'NoMandateServiceForSpecified'}),
    ];
  }

}

class ECode {
  code: string;
  value: string;

  constructor(options?: { code: string; value: string }) {
    if (options) {
      this.code = options.code;
      this.value = options.value;
    }
  }
}
