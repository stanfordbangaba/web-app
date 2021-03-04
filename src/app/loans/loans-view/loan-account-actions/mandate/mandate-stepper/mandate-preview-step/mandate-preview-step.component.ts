import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DebitOrderOperatorService} from '../../../../../../organization/debit-order-operator/debit-order-operator.service';

@Component({
  selector: 'mifosx-mandate-preview-step',
  templateUrl: './mandate-preview-step.component.html',
  styleUrls: ['./mandate-preview-step.component.scss']
})
export class MandatePreviewStepComponent implements OnInit {

  @Input() debitOrderMandate: any;

  @Output() submit = new EventEmitter();

  @Input() operatorOptions: any;

  constructor(private debitOrderOperatorService: DebitOrderOperatorService) {
  }

  ngOnInit(): void {

    if (!this.operatorOptions) {
      this.debitOrderOperatorService.getDebitOrderProviders()
        .subscribe(value => {
          if (value.responseCode === 'SUCCESS') {
            this.operatorOptions = value.entity;
          }
        });
    }
  }

}
