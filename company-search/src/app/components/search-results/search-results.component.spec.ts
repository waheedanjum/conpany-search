import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultsComponent } from './search-results.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let companyService: jasmine.SpyObj<CompanyService>;

  const mockCompanies: Company[] = [
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

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CompanyService', ['searchCompanies']);

    await TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: CompanyService, useValue: spy },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ query: 'Test Company' })
          }
        }
      ]
    }).compileComponents();

    companyService = TestBed.inject(CompanyService) as jasmine.SpyObj<CompanyService>;
    companyService.searchCompanies.and.returnValue(of(mockCompanies));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display search results', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Search Results');
    expect(compiled.querySelectorAll('.card').length).toBe(3);
  });
});
