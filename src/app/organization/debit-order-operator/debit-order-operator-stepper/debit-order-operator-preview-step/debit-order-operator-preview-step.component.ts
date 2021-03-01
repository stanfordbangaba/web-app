import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mifosx-debit-order-operator-preview-step',
  templateUrl: './debit-order-operator-preview-step.component.html',
  styleUrls: ['./debit-order-operator-preview-step.component.scss']
})
export class DebitOrderOperatorPreviewStepComponent implements OnInit {

  @Input() debitOrderOperator: any;

  @Output() submit = new EventEmitter();

  @Input() bankOptions: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
