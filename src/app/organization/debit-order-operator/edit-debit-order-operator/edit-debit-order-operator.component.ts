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

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private debitOrderProviderService: DebitOrderOperatorService) {
    this.route.data.subscribe((data: {providerData: any}) => {
      this.providerData = data.providerData;
    });
  }

  ngOnInit(): void {
    this.editDebitOrderForm();
  }

  editDebitOrderForm() {
    this.providerForm = this.formBuilder.group({
      'name': [this.providerData.name, [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'shortName': ['', [Validators.required]],
      'externalId': ['', [Validators.required]],
      'description': [this.providerData.description]
    });
  }

  submit() {
    const provider = this.providerForm.value;
    provider.status = this.providerData.status;
    provider.id = this.providerData.id;
    provider.dateCreated = this.providerData.dateCreated;

    this.debitOrderProviderService.editDebitOrderProvider(provider.id, provider)
      .subscribe(value => {
        this.router.navigate(['../../', value.id], {relativeTo: this.route});
      });
  }

}
