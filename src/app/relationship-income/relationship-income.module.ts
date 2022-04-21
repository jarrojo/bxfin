import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshipIncomeRoutingModule } from './relationship-income-routing.module';
import { RelationshipIncomeComponent } from './relationship-income.component';
import { EntityFilterComponent } from './entity-filter/entity-filter.component';

@NgModule({
  declarations: [RelationshipIncomeComponent, EntityFilterComponent],
  imports: [CommonModule, RelationshipIncomeRoutingModule],
})
export class RelationshipIncomeModule {}
