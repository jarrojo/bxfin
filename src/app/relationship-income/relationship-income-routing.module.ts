import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelationshipIncomeComponent } from './relationship-income.component';

const routes: Routes = [{ path: '', component: RelationshipIncomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationshipIncomeRoutingModule {}
