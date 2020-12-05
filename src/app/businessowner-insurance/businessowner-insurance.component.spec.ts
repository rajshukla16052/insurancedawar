import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessownerInsuranceComponent } from './businessowner-insurance.component';

describe('BusinessownerInsuranceComponent', () => {
  let component: BusinessownerInsuranceComponent;
  let fixture: ComponentFixture<BusinessownerInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessownerInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessownerInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
