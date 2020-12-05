import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDisabilityInsuranceComponent } from './group-disability-insurance.component';

describe('GroupDisabilityInsuranceComponent', () => {
  let component: GroupDisabilityInsuranceComponent;
  let fixture: ComponentFixture<GroupDisabilityInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDisabilityInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDisabilityInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
