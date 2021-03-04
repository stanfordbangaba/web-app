import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MandateService} from '../mandate.service';
import {MandateDetailsStepComponent} from '../mandate-stepper/mandate-details-step/mandate-details-step.component';
import {MandateSettingsStepComponent} from '../mandate-stepper/mandate-settings-step/mandate-settings-step.component';

@Component({
  selector: 'mifosx-create-mandate',
  templateUrl: './create-mandate.component.html',
  styleUrls: ['./create-mandate.component.scss']
})
export class CreateMandateComponent implements OnInit {

  @Input() dataObject: any;

  @ViewChild(MandateDetailsStepComponent, {static: true}) mandateDetailsStepComponent: MandateDetailsStepComponent;
  @ViewChild(MandateSettingsStepComponent, {static: true}) mandateSettingsStepComponent: MandateSettingsStepComponent;

  operatorOptions: any;
  clientOptions: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mandateService: MandateService) {
    this.route.data.subscribe((data: { operatorData: any, dataObject: any }) => {
      this.operatorOptions = data.operatorData.entity;
      this.clientOptions = data.dataObject;
      console.log(`DATA OBJECT CREATE :: {}`, this.clientOptions);
    });
  }

  ngOnInit(): void {
  }

  get debitOrderMandateDetailsForm() {
    return this.mandateDetailsStepComponent.mandateForm;
  }

  /**
   * Retrieves the object
   */
  get debitOrderMandate() {
    return {
      ...this.mandateDetailsStepComponent.debitOrderMandateDetails,
      ...this.mandateSettingsStepComponent.debitOrderMandateSettings
    };
  }

  /**
   * Submits the create form.
   */
  submit() {

    this.mandateService.createMandate(this.debitOrderMandate).subscribe((response: any) => {
      this.router.navigate(['../', response.resourceId], {relativeTo: this.route});
    });
  }

}
