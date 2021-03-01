import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mifosx-bank-tab',
  templateUrl: './bank-tab.component.html',
  styleUrls: ['./bank-tab.component.scss']
})
export class BankTabComponent implements OnInit {

  /** data */
  bankAccount: any;

  /**
   * Fetches data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent.data.subscribe((data: { providerData: any }) => {
      this.bankAccount = data.providerData.entity.bankAccount;
    });
  }

  ngOnInit(): void {
  }

}
