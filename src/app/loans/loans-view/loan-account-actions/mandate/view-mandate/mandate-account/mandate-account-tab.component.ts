import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MandateService} from '../../mandate.service';

@Component({
  selector: 'mifosx-mandate-account-tab',
  templateUrl: './mandate-account-tab.component.html',
  styleUrls: ['./mandate-account-tab.component.scss']
})
export class MandateAccountTabComponent implements OnInit {


  /** data */
  mandateData: any;

  constructor(private route: ActivatedRoute,
              private mandateService: MandateService) {

    const mandateId = this.route.parent.snapshot.params['mandateId'];
    this.mandateService.getMandate(mandateId)
      .subscribe(value => {
        this.mandateData = value.entity;
      });
  }

  ngOnInit(): void {
  }

}
