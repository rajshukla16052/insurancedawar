import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDisabilityInsuranceComponent } from './individual-disability-insurance.component';

describe('IndividualDisabilityInsuranceComponent', () => {
  let component: IndividualDisabilityInsuranceComponent;
  let fixture: ComponentFixture<IndividualDisabilityInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDisabilityInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDisabilityInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
