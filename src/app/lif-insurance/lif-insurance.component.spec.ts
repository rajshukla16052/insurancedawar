import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifInsuranceComponent } from './lif-insurance.component';

describe('LifInsuranceComponent', () => {
  let component: LifInsuranceComponent;
  let fixture: ComponentFixture<LifInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
