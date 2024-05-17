import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/results'], { queryParams: { query: this.searchQuery } });
  }
}
