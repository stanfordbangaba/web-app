import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MandateService} from '../../mandate.service';

@Component({
  selector: 'mifosx-mandate-details-tab',
  templateUrl: './mandate-details-tab.component.html',
  styleUrls: ['./mandate-details-tab.component.scss']
})
export class MandateDetailsTabComponent implements OnInit {


  /** data */
  mandateData: any;
  operatorOptions: any;
  tab1: any = false;

  /**
   * Fetches data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute,
              private mandateService: MandateService) {
    this.route.data.subscribe((data: {operatorOptions: any}) => {
      this.operatorOptions = data.operatorOptions.entity;
    });

    const mandateId = this.route.parent.snapshot.params['mandateId'];
    this.mandateService.getMandate(mandateId)
      .subscribe(value => {
        this.tab1 = true;
        this.mandateData = value.entity;
      });
  }

  ngOnInit(): void {
  }

}
