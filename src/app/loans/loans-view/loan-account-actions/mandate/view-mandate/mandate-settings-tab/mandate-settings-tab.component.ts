import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MandateService} from '../../mandate.service';

@Component({
  selector: 'mifosx-mandate-settings-tab',
  templateUrl: './mandate-settings-tab.component.html',
  styleUrls: ['./mandate-settings-tab.component.scss']
})
export class MandateSettingsTabComponent implements OnInit {

  /** data */
  mandateData: any;

  /**
   * Fetches data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute,
              private mandateService: MandateService) {
    const mandateId = this.route.parent.snapshot.params['mandateId'];
    console.log(`Mandate id :: ${mandateId}`);
    this.mandateService.getMandate(mandateId)
      .subscribe(value => {
        console.log(`RESULT :: ${JSON.stringify(value)}`);
        this.mandateData = value.entity;
      });
  }

  ngOnInit(): void {
  }

}
