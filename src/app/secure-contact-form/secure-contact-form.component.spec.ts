import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureContactFormComponent } from './secure-contact-form.component';

describe('SecureContactFormComponent', () => {
  let component: SecureContactFormComponent;
  let fixture: ComponentFixture<SecureContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
