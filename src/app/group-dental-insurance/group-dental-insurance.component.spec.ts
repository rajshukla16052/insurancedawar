import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDentalInsuranceComponent } from './group-dental-insurance.component';

describe('GroupDentalInsuranceComponent', () => {
  let component: GroupDentalInsuranceComponent;
  let fixture: ComponentFixture<GroupDentalInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDentalInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDentalInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
