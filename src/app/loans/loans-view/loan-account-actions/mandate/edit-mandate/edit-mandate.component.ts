import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MandateService} from '../mandate.service';

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

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private mandateService: MandateService) {
    this.mandateData = {};
  }

  ngOnInit(): void {
    this.editMandateForm();
  }

  editMandateForm() {
    this.mandateForm = this.formBuilder.group({
      'startDate': [this.mandateData.startDate, Validators.required],
      'endDate': [this.mandateData.endDate, Validators.required],
      'debitOrderDueDate': [this.mandateData.debitOrderDueDate, Validators.required],
      'additionalFee': [this.mandateData.additionalFee, Validators.required],
      'debitOrderMandateNumber': [this.mandateData.debitOrderMandateNumber, Validators.required]
    });
  }

  submit() {
    const mandate = this.mandateForm.value;
    mandate.status = this.mandateData.status;
    mandate.debitOrderMandateStatus = this.mandateData.debitOrderMandateStatus;
    mandate.dateCreated = this.mandateData.dateCreated;

    this.mandateService.editMandate(this.mandateData.id, mandate)
      .subscribe(response => {
        this.router.navigate(['../', response.id], {relativeTo: this.route});
      });
  }

}
