import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualVisionInsuranceComponent } from './individual-vision-insurance.component';

describe('IndividualVisionInsuranceComponent', () => {
  let component: IndividualVisionInsuranceComponent;
  let fixture: ComponentFixture<IndividualVisionInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualVisionInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualVisionInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
