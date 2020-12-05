import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatMarinInsuranceComponent } from './boat-marin-insurance.component';

describe('BoatMarinInsuranceComponent', () => {
  let component: BoatMarinInsuranceComponent;
  let fixture: ComponentFixture<BoatMarinInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatMarinInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatMarinInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
