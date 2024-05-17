import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit {

company = {
    name: 'BBC LIMITED',
    number: '06500244',
    address: 'Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD',
    status: 'Active',
    type: 'Private limited company',
    incorporationDate: '11 February 2008'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    // TODO: Fetch the actual company details using the companyId
  }
}
