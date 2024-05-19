import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficersListComponent } from './officers-list.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Officer } from '../../models/officer';
import { CompanyService } from '../../services/company.service';

describe('OfficersListComponent', () => {
  let component: OfficersListComponent;
  let fixture: ComponentFixture<OfficersListComponent>;
  let companyService: jasmine.SpyObj<CompanyService>;

  const mockOfficers: Officer[] = [
    { name: 'John Smith', role: 'Director' },
    { name: 'Mary Jane', role: 'Secretary' }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CompanyService', ['getCompanyOfficers']);

    await TestBed.configureTestingModule({
      declarations: [OfficersListComponent],
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
    companyService.getCompanyOfficers.and.returnValue(of(mockOfficers));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display officers', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Officers');
    expect(compiled.querySelectorAll('.list-group-item').length).toBe(2);
  });
});
