/** Angular Imports */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

/** Custom Services */
import {LoansService} from 'app/loans/loans.service';
import {DatePipe} from '@angular/common';

/** Dialog Components */
import {DeleteDialogComponent} from 'app/shared/delete-dialog/delete-dialog.component';
import {MandateService} from './mandate.service';

/**
 * View Mandates Action
 */
@Component({
  selector: 'mifosx-view-mandates',
  templateUrl: './view-mandates.component.html',
  styleUrls: ['./view-mandates.component.scss']
})
export class ViewMandatesComponent implements OnInit {

  @Input() dataObject: any;
  mandateDetails: any;
  showDeletedMandatesAccounts = false;
  loanId: any;
  mandatesDisplayedColumns: string[] = ['startDate', 'endDate', 'debitOrderDueDate', 'additionalFee', 'debitOrderMandateNumber', 'debitOrderMandateStatus', 'action'];


  constructor(public dialog: MatDialog,
              public mandateService: MandateService,
              private route: ActivatedRoute,
              private router: Router) {
    this.loanId = this.route.parent.snapshot.params['loanId'];
  }

  ngOnInit() {
    this.mandateService.getMandatesByAccountNumber(this.dataObject.accountNo)
      .subscribe(value => {
        if (value.responseCode === 'SUCCESS') {
          this.mandateDetails = value.entity;
        }
      });

  }

  toggleMandatesDetailsOverview() {
    this.showDeletedMandatesAccounts = !this.showDeletedMandatesAccounts;
  }

  deleteMandate(id: any) {
    const deleteMandateDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {deleteContext: `the mandate id: ${id}`}
    });
    deleteMandateDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        // this.loansService.deleteMandate(this.loanId, id).subscribe(() => {
        //   this.reload();
        // });
      }
    });
  }

  viewMandateDetail(mandateData: any) {
    // const viewMandateDetailsDialogRef = this.dialog.open(LoansAccountViewMandateDetailsDialogComponent, {
    //   data: { mandateData: mandateData }
    // });
    // viewMandateDetailsDialogRef.afterClosed().subscribe(() => {});
  }

  /**
   * Refetches data for the component
   * TODO: Replace by a custom reload component instead of hard-coded back-routing.
   */
  private reload() {
    const clientId = this.dataObject.clientId;
    const url: string = this.router.url;
    this.router.navigateByUrl(`/clients/${clientId}/loans-accounts`, {skipLocationChange: true})
      .then(() => this.router.navigate([url]));
  }

}
