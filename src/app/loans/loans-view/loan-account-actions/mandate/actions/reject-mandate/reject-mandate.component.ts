import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientsService} from '../../../../../../clients/clients.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {SettingsService} from '../../../../../../settings/settings.service';
import {MandateService} from '../../mandate.service';

@Component({
  selector: 'mifosx-reject-mandate',
  templateUrl: './reject-mandate.component.html',
  styleUrls: ['./reject-mandate.component.scss']
})
export class RejectMandateComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  rejectMandateForm: FormGroup;

  closureData: any;
  externalCodes: any;
  mandateId: any;

  constructor(private formBuilder: FormBuilder,
              private mandateService: MandateService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    // this.route.data.subscribe((data: { clientActionData: any }) => {
    //   this.closureData = data.clientActionData.narrations;
    // });
    this.mandateId = this.route.snapshot.params['mandateId'];
    console.log(`Mandate ID :: ${this.mandateId}`);
  }

  ngOnInit() {
    this.createRejectMandateForm();
    this.initializeExternalCodes();
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
      new ECode({code: 'MD10', value: 'NoMandateServiceForSpecified'}),
    ];
  }

  /**
   * Creates the close client form.
   */
  createRejectMandateForm() {
    this.rejectMandateForm = this.formBuilder.group({
      'closureDate': ['', Validators.required],
      'closureReasonId': ['', Validators.required]
    });
  }

  /**
   * Submits the form and closes the client.
   */
  submit() {
    const data = this.rejectMandateForm.value;
    this.mandateService.disableMandate(this.mandateId, data).subscribe(() => {
      this.router.navigate(['../../mandate', this.mandateId, 'details'], {relativeTo: this.route});
    });
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
