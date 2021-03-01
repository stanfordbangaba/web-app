import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mifosx-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.scss']
})
export class GeneralDOOperatorTabComponent implements OnInit {

  /** data */
  operatorData: any;

  /**
   * Fetches data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent.data.subscribe((data: { providerData: any }) => {
      this.operatorData = data.providerData.entity;
    });
  }

  ngOnInit(): void {
  }

}
