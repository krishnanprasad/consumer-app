import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddChefComponent } from './admin-add-chef.component';

describe('AdminAddChefComponent', () => {
  let component: AdminAddChefComponent;
  let fixture: ComponentFixture<AdminAddChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
