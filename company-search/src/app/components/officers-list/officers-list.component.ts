import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Officer } from '../../models/officer';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.css'
})

export class OfficersListComponent implements OnInit {
  public officers: Officer[] = [];

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    if (companyId) {
      this.companyService.getCompanyOfficers(companyId).subscribe(officers => {
        this.officers = officers;
      });
    }
  }
}
