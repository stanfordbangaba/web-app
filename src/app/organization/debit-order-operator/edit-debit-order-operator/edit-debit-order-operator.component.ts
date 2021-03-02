import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DebitOrderOperatorService} from '../debit-order-operator.service';

@Component({
  selector: 'mifosx-edit-debit-order-provider',
  templateUrl: './edit-debit-order-operator.component.html',
  styleUrls: ['./edit-debit-order-operator.component.scss']
})
export class EditDebitOrderOperatorComponent implements OnInit {

  providerData: any;
  providerForm: FormGroup;
  bankOptions: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private debitOrderProviderService: DebitOrderOperatorService) {
    this.route.data.subscribe((data: { providerData: any, bankData: any }) => {
      this.providerData = data.providerData.entity;
      this.bankOptions = data.bankData.entity;
    });
  }

  ngOnInit(): void {
    this.editDebitOrderForm();

    this.providerForm.patchValue({
      'name': this.providerData.name,
      'shortName': this.providerData.shortName,
      'externalId': this.providerData.externalId,
      'description': this.providerData.description,
      'accountName': this.providerData.bankAccount.accountName,
      'accountNumber': this.providerData.bankAccount.accountNumber,
      'bankCode': this.providerData.bankAccount.bank.code
    });
  }

  editDebitOrderForm() {
    this.providerForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'shortName': ['', [Validators.required]],
      'externalId': ['', [Validators.required]],
      'description': [''],
      'accountName': ['', [Validators.required]],
      'accountNumber': ['', [Validators.required]],
      'bankCode': ['', [Validators.required]]
    });
  }

  submit() {
    const provider = this.providerForm.value;
    provider.id = this.providerData.id;

    this.debitOrderProviderService.editDebitOrderProvider(provider.id, provider)
      .subscribe(value => {
        this.router.navigate(['../../', value.entity.id], {relativeTo: this.route});
      });
  }

}
