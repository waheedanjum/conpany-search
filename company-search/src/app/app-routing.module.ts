import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { OfficersListComponent } from './officers-list/officers-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: 'company/:id', component: CompanyDetailComponent },
  { path: 'company/:id/officers', component: OfficersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
