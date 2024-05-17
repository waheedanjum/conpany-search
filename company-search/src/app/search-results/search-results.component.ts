import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {

  companies = [
    {
      name: 'BBC AND CO LIMITED',
      number: '07520899',
      incorporationDate: '7 February 2011',
      address: 'Unit 2 Restormel Estate, Liddicoat Road, Lostwithiel, Cornwall, PL22 0HG'
    },
    {
      name: 'BBC AESTHETICS LIMITED',
      number: '09670032',
      incorporationDate: '3 July 2015',
      address: 'Suite 4 Second Floor Honeycomb, Edmund Street, Liverpool, England, L3 9NG'
    },
    {
      name: 'BBC & M LIMITED',
      number: '11560666',
      incorporationDate: '10 September 2018',
      address: '36 Station Road, Handsworth, Birmingham, United Kingdom, B21 0EY'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['query'];
      // TODO: Fetch the actual search results using the query
    });
  }

}
