import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCarriersComponent } from './insurance-carriers.component';

describe('InsuranceCarriersComponent', () => {
  let component: InsuranceCarriersComponent;
  let fixture: ComponentFixture<InsuranceCarriersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCarriersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
