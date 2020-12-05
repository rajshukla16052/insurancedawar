import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAnnuitiesComponent } from './fixed-annuities.component';

describe('FixedAnnuitiesComponent', () => {
  let component: FixedAnnuitiesComponent;
  let fixture: ComponentFixture<FixedAnnuitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedAnnuitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAnnuitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
