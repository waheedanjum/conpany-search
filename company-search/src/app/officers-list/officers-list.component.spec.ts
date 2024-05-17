import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficersListComponent } from './officers-list.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('OfficersListComponent', () => {
  let component: OfficersListComponent;
  let fixture: ComponentFixture<OfficersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficersListComponent],
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
    expect(compiled.querySelectorAll('.list-group-item').length).toBe(2); // Assuming we have 2 dummy officers
  });
});
