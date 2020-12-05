import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPropertyInsuranceComponent } from './commercial-property-insurance.component';

describe('CommercialPropertyInsuranceComponent', () => {
  let component: CommercialPropertyInsuranceComponent;
  let fixture: ComponentFixture<CommercialPropertyInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialPropertyInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPropertyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
