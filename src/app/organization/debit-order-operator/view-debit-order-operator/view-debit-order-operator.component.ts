import {Component, OnInit} from '@angular/core';
import {DebitOrderOperatorService} from '../debit-order-operator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../../../shared/delete-dialog/delete-dialog.component';
import {ConfirmationDialogComponent} from '../../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'mifosx-view-debit-order-provider',
  templateUrl: './view-debit-order-operator.component.html',
  styleUrls: ['./view-debit-order-operator.component.scss']
})
export class ViewDebitOrderOperatorComponent implements OnInit {

  providerData: any;

  constructor(private debitOrderProviderService: DebitOrderOperatorService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: { providerData: any }) => {
      this.providerData = data.providerData.entity;
    });
  }

  ngOnInit(): void {
  }

  activateProvider() {
    const activateProviderRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {heading: 'Activate ', dialogContext: 'Are you sure you want approve this?', type: 'Basic'}
    });
    activateProviderRef.afterClosed().subscribe(response => {
      if (response.confirm) {
        this.debitOrderProviderService.approveDebitOrderProvider(this.providerData.id)
          .subscribe(value => {
            this.reload();
          });
      }
    });
  }

  deleteProvider() {
    const deleteProviderRef = this.dialog.open(DeleteDialogComponent, {
      data: {deleteContext: `provider ${this.providerData.id}`}
    });
    deleteProviderRef.afterClosed().subscribe(response => {
      if (response.delete) {
        this.debitOrderProviderService.deleteDebitOrderProvider(this.providerData.id)
          .subscribe(value => {
            this.router.navigate(['organization/debit-order-providers']);
          });
      }
    });
  }

  disableProvider() {
    const disableProviderRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {heading: 'Disable ', dialogContext: 'Are you sure you want disable this?', type: 'Mild'}
    });
    disableProviderRef.afterClosed().subscribe(response => {
      if (response.confirm) {
        this.debitOrderProviderService.disableDebitOrderProvider(this.providerData.id)
          .subscribe(value => {
            this.reload();
          });
      }
    });
  }

  private reload() {
    window.location.reload();
    // const id = this.providerData.id;
    // const url: string = this.router.url;
    // this.router.navigateByUrl(`/organization/debit-order-providers/${id}`, { skipLocationChange: true })
    //   .then(() => this.router.navigate([url]));
  }

}
