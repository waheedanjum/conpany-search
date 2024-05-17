import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultsComponent } from './search-results.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ query: 'Test Company' })
          }
        }
      ]
    }).compileComponents();
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
    expect(compiled.querySelectorAll('.card').length).toBe(3); // Assuming we have 3 dummy companies
  });
});
