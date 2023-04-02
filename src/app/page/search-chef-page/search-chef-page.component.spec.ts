import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChefPageComponent } from './search-chef-page.component';

describe('SearchChefPageComponent', () => {
  let component: SearchChefPageComponent;
  let fixture: ComponentFixture<SearchChefPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchChefPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchChefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
