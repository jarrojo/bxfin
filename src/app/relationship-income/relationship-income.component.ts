import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import * as _ from 'lodash';
import {
  IncomeType,
  Relationship,
  RelationshipTotal,
} from './models/pagemodel.model';

@Component({
  selector: 'app-relationship-income',
  templateUrl: './relationship-income.component.html',
  styleUrls: ['./relationship-income.component.scss'],
})
export class RelationshipIncomeComponent implements OnInit {
  headers$ = this.customerService.headers$;
  pageModel$: Observable<{
    relationship: Relationship;
    relationshipIncome?: IncomeType;
    relationshipTotal?: RelationshipTotal[];
  }> = this.customerService.pageModel$.pipe(
    map((pageModel) => {
      const {
        relationship,
        summary: { incomeTypes, relationshipTotal },
      } = pageModel;
      return {
        relationship,
        relationshipIncome: _(incomeTypes)
          .filter((x) => x.typeCode === 'relationshipIncome')
          .first(),
        relationshipTotal,
      };
    })
  );

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}
}
