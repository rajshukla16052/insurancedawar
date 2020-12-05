import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLifeInsuranceComponent } from './group-life-insurance.component';

describe('GroupLifeInsuranceComponent', () => {
  let component: GroupLifeInsuranceComponent;
  let fixture: ComponentFixture<GroupLifeInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupLifeInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLifeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
