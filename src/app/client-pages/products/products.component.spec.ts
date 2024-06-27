import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllProductsComponent } from './products.component';

describe('UserAllProductsComponent', () => {
  let component: UserAllProductsComponent;
  let fixture: ComponentFixture<UserAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
