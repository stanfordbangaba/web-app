import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'mifosx-loans-account-view-mandate-batch-item-dialog',
  templateUrl: './loans-account-view-mandate-batch-item-dialog.component.html',
  styleUrls: ['./loans-account-view-mandate-batch-item-dialog.component.scss']
})
export class LoansAccountViewMandateBatchItemDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoansAccountViewMandateBatchItemDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dialogRef.updateSize('400px');
  }

}
