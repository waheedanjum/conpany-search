import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPageComponent } from './search-page.component';
import { Router } from '@angular/router';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      imports: [FormsModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to results on form submit', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.searchQuery = 'Test Company';
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['/results'], { queryParams: { query: 'Test Company' } });
  });
});
