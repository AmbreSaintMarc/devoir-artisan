import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFoodComponent } from './category-food.component';

describe('CategoryFoodComponent', () => {
  let component: CategoryFoodComponent;
  let fixture: ComponentFixture<CategoryFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
