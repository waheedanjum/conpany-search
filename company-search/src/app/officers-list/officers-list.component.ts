import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.css'
})
export class OfficersListComponent implements OnInit {
  officers = [
    { name: 'John Smith', role: 'Director' },
    { name: 'Mary Jane', role: 'Secretary' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    // TODO: Fetch the actual officers list using the companyId
  }
}
