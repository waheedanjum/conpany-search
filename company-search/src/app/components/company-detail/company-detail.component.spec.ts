import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailComponent } from './company-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';

describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;
  let companyService: jasmine.SpyObj<CompanyService>;

  const mockCompany: Company = {
    name: 'BBC LIMITED',
    number: '06500244',
    address: 'Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD',
    status: 'Active',
    type: 'Private limited company',
    incorporationDate: '11 February 2008',
    Officer: [
      { name: "John Wright", role: "Director"},
      { name: "Justin Langer", role: "Director"}
    ]

  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CompanyService', ['getCompanyDetails']);

    await TestBed.configureTestingModule({
      declarations: [CompanyDetailComponent],
      providers: [
        { provide: CompanyService, useValue: spy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '06500244'
              }
            }
          }
        }
      ]
    }).compileComponents();

    companyService = TestBed.inject(CompanyService) as jasmine.SpyObj<CompanyService>;
    companyService.getCompanyDetails.and.returnValue(of(mockCompany));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display company details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('BBC LIMITED');
    expect(compiled.querySelector('p').textContent).toContain('Company number: 06500244');
  });
});
