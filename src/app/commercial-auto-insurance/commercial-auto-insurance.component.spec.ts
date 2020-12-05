import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialAutoInsuranceComponent } from './commercial-auto-insurance.component';

describe('CommercialAutoInsuranceComponent', () => {
  let component: CommercialAutoInsuranceComponent;
  let fixture: ComponentFixture<CommercialAutoInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialAutoInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialAutoInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
