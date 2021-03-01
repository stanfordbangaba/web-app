import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoansAccountViewMandateBatchItemDialogComponent} from '../../../../../custom-dialog/loans-account-view-mandate-batch-item-dialog/loans-account-view-mandate-batch-item-dialog.component';

@Component({
  selector: 'mifosx-mandate-batch-items',
  templateUrl: './mandate-batch-items.component.html',
  styleUrls: ['./mandate-batch-items.component.scss']
})
export class MandateBatchItemsComponent implements OnInit {
  mandateBatchItems: any;

  displayedColumns: string[] = ['reference', 'destinationAccount', 'originAccount', 'processingDate', 'amount', 'amountCurrencyCode', 'itemStatus', 'action'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.mandateBatchItems = [];
  }
  viewBatchItemDetail(batchItemData: any) {
    const viewBatchItemDetailsDialogRef = this.dialog.open(LoansAccountViewMandateBatchItemDialogComponent, {
      data: { batchItemData: batchItemData }
    });
    viewBatchItemDetailsDialogRef.afterClosed().subscribe(() => {});
  }

}
