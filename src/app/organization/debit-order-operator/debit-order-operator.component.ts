import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mifosx-debit-order-providers',
  templateUrl: './debit-order-operator.component.html',
  styleUrls: ['./debit-order-operator.component.scss']
})
export class DebitOrderOperatorComponent implements OnInit {

  /** Provider data. */
  debitOrderProviders: any;
  /** Columns to be displayed in providers table. */
  displayedColumns: string[] = ['name', 'description', 'status', 'startDate', 'actions'];
  /** Data source for providers table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for providers table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for providers table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the providers data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(( data: { debitOrderProviders: any }) => {
      this.debitOrderProviders = data.debitOrderProviders.entity;
    });
  }

  /**
   * Filters data in providers table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the providers table.
   */
  ngOnInit() {
    this.setProviders();
  }

  /**
   * Initializes the data source, paginator and sorter for providers table.
   */
  setProviders() {
    console.log(this.debitOrderProviders);
    this.dataSource = new MatTableDataSource(this.debitOrderProviders);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
