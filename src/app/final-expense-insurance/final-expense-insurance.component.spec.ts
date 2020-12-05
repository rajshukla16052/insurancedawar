import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalExpenseInsuranceComponent } from './final-expense-insurance.component';

describe('FinalExpenseInsuranceComponent', () => {
  let component: FinalExpenseInsuranceComponent;
  let fixture: ComponentFixture<FinalExpenseInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalExpenseInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalExpenseInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
