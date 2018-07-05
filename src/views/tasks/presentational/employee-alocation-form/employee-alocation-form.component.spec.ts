import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeAlocationFormComponent} from './employee-alocation-form.component';

describe('EmploeeAlocationFormComponent', () => {
  let component: EmployeeAlocationFormComponent;
  let fixture: ComponentFixture<EmployeeAlocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAlocationFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAlocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
