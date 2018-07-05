import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocatedEmployeeListComponent } from './alocated-employee-list.component';

describe('AlocatedEmployeeListComponent', () => {
  let component: AlocatedEmployeeListComponent;
  let fixture: ComponentFixture<AlocatedEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocatedEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocatedEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
