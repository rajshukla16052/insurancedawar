import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckingInsuranceComponent } from './trucking-insurance.component';

describe('TruckingInsuranceComponent', () => {
  let component: TruckingInsuranceComponent;
  let fixture: ComponentFixture<TruckingInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckingInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckingInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
