import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBenefitsComponent } from './group-benefits.component';

describe('GroupBenefitsComponent', () => {
  let component: GroupBenefitsComponent;
  let fixture: ComponentFixture<GroupBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
