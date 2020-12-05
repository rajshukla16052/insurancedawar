import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLongCareInsuranceComponent } from './individual-long-care-insurance.component';

describe('IndividualLongCareInsuranceComponent', () => {
  let component: IndividualLongCareInsuranceComponent;
  let fixture: ComponentFixture<IndividualLongCareInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLongCareInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLongCareInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
