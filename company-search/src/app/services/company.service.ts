import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../models/company';
import { Officer } from '../models/officer';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companies: Company[] = [
    {
      name: 'BBC AND CO LIMITED',
      number: '07520899',
      incorporationDate: '7 February 2011',
      address: 'Unit 2 Restormel Estate, Liddicoat Road, Lostwithiel, Cornwall, PL22 0HG',
      Officer: [
        { name: "John Wright", role: "Director"},
        { name: "Justin Langer", role: "Director"}
      ]
    },
    {
      name: 'BBC AESTHETICS LIMITED',
      number: '09670032',
      incorporationDate: '3 July 2015',
      address: 'Suite 4 Second Floor Honeycomb, Edmund Street, Liverpool, England, L3 9NG',
      Officer: [
        { name: "John Wright", role: "Director"},
        { name: "Justin Langer", role: "Director"}
      ]
    },
    {
      name: 'BBC & M LIMITED',
      number: '11560666',
      incorporationDate: '10 September 2018',
      address: '36 Station Road, Handsworth, Birmingham, United Kingdom, B21 0EY',
      Officer: [
        { name: "John Wright", role: "Director"},
        { name: "Justin Langer", role: "Director"}
      ]
    }
  ];


  private baseUrl = 'https://api.example.com/companies'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  searchCompanies(query: string): Observable<Company[]> {
    return this.getCompanies();
  }

  getCompanyDetails(companyId: string): Observable<Company> {
    let company: Company = this.companies.find((c) => c.number === companyId)!;
    return of(company);
  }

  getCompanyOfficers(companyId: string): Observable<Officer[]> {
    const company: Company = this.companies.find((c) => c.number === companyId)!;
    return  of(company.Officer);
  }

   getCompanies(): Observable<Company[]>{
    return of(this.companies);
   }
}
