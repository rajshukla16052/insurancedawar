import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerInsuranceComponent } from './homeowner-insurance.component';

describe('HomeownerInsuranceComponent', () => {
  let component: HomeownerInsuranceComponent;
  let fixture: ComponentFixture<HomeownerInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeownerInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownerInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
