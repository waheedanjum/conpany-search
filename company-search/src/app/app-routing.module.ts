import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { OfficersListComponent } from './components/officers-list/officers-list.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

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
