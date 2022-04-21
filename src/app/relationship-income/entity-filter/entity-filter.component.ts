import { Component, Input, OnInit } from '@angular/core';
import {
  IncomeType,
  Relationship,
  RelationshipTotal,
} from '../models/pagemodel.model';

@Component({
  selector: 'app-entity-filter',
  templateUrl: './entity-filter.component.html',
  styleUrls: ['./entity-filter.component.scss'],
})
export class EntityFilterComponent implements OnInit {
  @Input() relationship!: Relationship;
  @Input() relationshipIncome!: IncomeType;
  @Input() relationshipTotal!: RelationshipTotal[];

  constructor() {}

  ngOnInit(): void {}
}
