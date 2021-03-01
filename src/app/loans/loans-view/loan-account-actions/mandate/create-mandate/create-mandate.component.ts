import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MandateService} from '../mandate.service';

@Component({
  selector: 'mifosx-create-mandate',
  templateUrl: './create-mandate.component.html',
  styleUrls: ['./create-mandate.component.scss']
})
export class CreateMandateComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  mandateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private mandateService: MandateService) {
  }

  ngOnInit(): void {
    this.createMandateForm();
  }

  createMandateForm() {
    this.mandateForm = this.formBuilder.group({
      'startDate': ['', Validators.required],
      'endDate': ['', Validators.required],
      'debitOrderDueDate': ['', Validators.required],
      'additionalFee': ['', Validators.required],
      'debitOrderMandateNumber': ['', Validators.required]
    });
  }

  submit() {
    const mandate = this.mandateForm.value;

    this.mandateService.createMandate(mandate)
      .subscribe(response => {
        this.router.navigate(['../', response.id], {relativeTo: this.route});
      });
  }

}
