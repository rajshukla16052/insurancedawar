import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompensationInsuranceComponent } from './workers-compensation-insurance.component';

describe('WorkersCompensationInsuranceComponent', () => {
  let component: WorkersCompensationInsuranceComponent;
  let fixture: ComponentFixture<WorkersCompensationInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCompensationInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCompensationInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
