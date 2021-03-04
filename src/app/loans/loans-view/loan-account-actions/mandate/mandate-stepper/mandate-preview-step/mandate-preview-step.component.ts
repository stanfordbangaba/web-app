import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mifosx-mandate-preview-step',
  templateUrl: './mandate-preview-step.component.html',
  styleUrls: ['./mandate-preview-step.component.scss']
})
export class MandatePreviewStepComponent implements OnInit {

  @Input() debitOrderMandate: any;

  @Output() submit = new EventEmitter();

  @Input() operatorOptions: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
