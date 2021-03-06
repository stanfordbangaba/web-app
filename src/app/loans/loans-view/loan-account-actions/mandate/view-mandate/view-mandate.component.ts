import {Component, OnInit} from '@angular/core';
import {MandateService} from '../mandate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../../../../../shared/confirmation-dialog/confirmation-dialog.component';
import {DeleteDialogComponent} from '../../../../../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'mifosx-view-mandate',
  templateUrl: './view-mandate.component.html',
  styleUrls: ['./view-mandate.component.scss']
})
export class ViewMandateComponent implements OnInit {

  mandateData: any;

  constructor(private mandateService: MandateService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    const mandateId = this.route.snapshot.params['mandateId'];
    console.log(`Mandate id :: ${mandateId}`);
    this.mandateService.getMandate(mandateId)
      .subscribe(value => {
        console.log(`RESULT :: ${JSON.stringify(value.entity)}`);
        this.mandateData = value.entity;
      });
  }

  activateMandate() {
    const activateMandateRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {heading: 'Activate ', dialogContext: 'Are you sure you want activate this', type: 'Basic'}
    });

    activateMandateRef.afterClosed().subscribe(value => {
      if (value.confirm) {
        this.mandateService.activateMandate(this.mandateData.id)
          .subscribe(value1 => {
            this.reload();
          });
      }
    });
  }

  disableMandate() {
    const disableMandateRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {heading: 'Disable ', dialogContext: 'Are you sure you want disable this', type: 'Strong'}
    });

    disableMandateRef.afterClosed().subscribe(value => {
      if (value.confirm) {
        this.mandateService.disableMandate(this.mandateData.id)
          .subscribe(value1 => {
            this.reload();
          });
      }
    });
  }

  deleteMandate() {
    const deleteMandateRef = this.dialog.open(DeleteDialogComponent, {
      data: {deleteContext: `provider ${this.mandateData.id}`}
    });
    deleteMandateRef.afterClosed().subscribe(response => {
      if (response.delete) {
        this.mandateService.deleteMandate(this.mandateData.id)
          .subscribe(value => {
            this.reload();
            // this.router.navigate(['organization/debit-order-providers']);
          });
      }
    });
  }

  private reload() {
    window.location.reload();
  }

  private back() {
    this.router.navigate(['../../actions/', 'Manage Mandates'], {relativeTo: this.route});
  }

}