import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManufacturingComponent } from './category-manufacturing.component';

describe('CategoryManufacturingComponent', () => {
  let component: CategoryManufacturingComponent;
  let fixture: ComponentFixture<CategoryManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryManufacturingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
