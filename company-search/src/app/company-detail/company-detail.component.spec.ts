import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailComponent } from './company-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDetailComponent],
      providers: [
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
