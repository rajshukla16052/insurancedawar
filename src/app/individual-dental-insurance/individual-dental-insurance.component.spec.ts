import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDentalInsuranceComponent } from './individual-dental-insurance.component';

describe('IndividualDentalInsuranceComponent', () => {
  let component: IndividualDentalInsuranceComponent;
  let fixture: ComponentFixture<IndividualDentalInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDentalInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDentalInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
