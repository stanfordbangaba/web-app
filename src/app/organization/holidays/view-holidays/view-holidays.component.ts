/** Angular Imports. */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

/** Custom Services. */
import {OrganizationService} from 'app/organization/organization.service';

/** Custom Components. */
import {DeleteDialogComponent} from '../../../shared/delete-dialog/delete-dialog.component';
import {ConfirmationDialogComponent} from '../../../shared/confirmation-dialog/confirmation-dialog.component';

/**
 * View Holidays component.
 */
@Component({
  selector: 'mifosx-view-holidays',
  templateUrl: './view-holidays.component.html',
  styleUrls: ['./view-holidays.component.scss']
})
export class ViewHolidaysComponent {

  /** Holiday data. */
  holidayData: any;

  /**
   * Retrieves hioliday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private organizationService: OrganizationService) {
    this.route.data.subscribe((data: { holidays: any }) => {
      this.holidayData = data.holidays;
      console.log(`Holiday data: ${JSON.stringify(this.holidayData)}`);
    });
  }

  /**
   * Deletes the holiday.
   */
  deleteHoliday() {
    const deleteHolidayDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {deleteContext: `holiday ${this.holidayData.id}`}
    });
    deleteHolidayDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.organizationService.deleteHoliday(this.holidayData.id)
          .subscribe(() => {
            this.router.navigate(['../'], {relativeTo: this.route});
          });
      }
    });
  }

  /**
   * Activate Holiday
   */
  activateHoliday() {
    const activateHolidayDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: 'Activate Holiday',
        dialogContext: `Are you sure, you want to activate the holiday ${this.holidayData.name}`
      }
    });
    activateHolidayDialogRef.afterClosed().subscribe(value => {
      if (value.confirm) {
        this.organizationService.activateHoliday(this.holidayData.id, {})
          .subscribe(value1 => {
            console.log(`Activate response: `, JSON.stringify(value1));
            this.refresh();
            // this.router.navigate(['/organization/holidays', this.holidayData.id]);
          });
      }
    });
  }

  refresh(): void {
    window.location.reload();
  }

}
