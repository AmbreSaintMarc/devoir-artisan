import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBuildingComponent } from './category-building.component';

describe('CategoryBuildingComponent', () => {
  let component: CategoryBuildingComponent;
  let fixture: ComponentFixture<CategoryBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
