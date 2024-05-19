import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  public searchQuery: string = '';

  constructor(private router: Router, private companyService: CompanyService) {}

  public onSubmit() {
    this.router.navigate(['/results'], { queryParams: { query: this.searchQuery } });
  }
}
