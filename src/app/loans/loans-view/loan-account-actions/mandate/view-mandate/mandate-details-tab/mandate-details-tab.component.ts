import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mifosx-mandate-details-tab',
  templateUrl: './mandate-details-tab.component.html',
  styleUrls: ['./mandate-details-tab.component.scss']
})
export class MandateDetailsTabComponent implements OnInit {


  /** data */
  mandateData: any;

  /**
   * Fetches data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent.data.subscribe((data: { mandateData: any }) => {
      this.mandateData = data.mandateData.entity;
    });
  }

  ngOnInit(): void {
  }

}
