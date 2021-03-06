import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoansAccountViewMandateBatchItemDialogComponent} from '../../../../../custom-dialog/loans-account-view-mandate-batch-item-dialog/loans-account-view-mandate-batch-item-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'mifosx-mandate-batch-items',
  templateUrl: './mandate-batch-items.component.html',
  styleUrls: ['./mandate-batch-items.component.scss']
})
export class MandateBatchItemsComponent implements OnInit {
  mandateBatchItems: any;

  displayedColumns: string[] = ['reference', 'destinationAccount', 'originAccount', 'processingDate', 'amount', 'amountCurrencyCode', 'itemStatus', 'action'];

  constructor(private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.data.subscribe((data: { batchItems: any }) => {
      this.mandateBatchItems = data.batchItems.entity;
    });
  }

  ngOnInit(): void {
  }
  viewBatchItemDetail(batchItemData: any) {
    const viewBatchItemDetailsDialogRef = this.dialog.open(LoansAccountViewMandateBatchItemDialogComponent, {
      data: { batchItemData: batchItemData }
    });
    viewBatchItemDetailsDialogRef.afterClosed().subscribe(() => {});
  }

  back() {
    const  mandateId = this.route.snapshot.params['mandateId'];
    this.router.navigate(['../../mandate', mandateId, 'details'], {relativeTo: this.route});
  }
}
