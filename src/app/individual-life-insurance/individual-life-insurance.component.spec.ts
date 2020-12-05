import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLifeInsuranceComponent } from './individual-life-insurance.component';

describe('IndividualLifeInsuranceComponent', () => {
  let component: IndividualLifeInsuranceComponent;
  let fixture: ComponentFixture<IndividualLifeInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLifeInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLifeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
