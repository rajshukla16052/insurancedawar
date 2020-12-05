import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHealthInsuranceComponent } from './group-health-insurance.component';

describe('GroupHealthInsuranceComponent', () => {
  let component: GroupHealthInsuranceComponent;
  let fixture: ComponentFixture<GroupHealthInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupHealthInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
