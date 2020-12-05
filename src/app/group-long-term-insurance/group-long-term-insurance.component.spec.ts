import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLongTermInsuranceComponent } from './group-long-term-insurance.component';

describe('GroupLongTermInsuranceComponent', () => {
  let component: GroupLongTermInsuranceComponent;
  let fixture: ComponentFixture<GroupLongTermInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupLongTermInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLongTermInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
