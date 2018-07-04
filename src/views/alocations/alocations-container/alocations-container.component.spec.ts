import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocationsContainerComponent } from './alocations-container.component';

describe('AlocationsContainerComponent', () => {
  let component: AlocationsContainerComponent;
  let fixture: ComponentFixture<AlocationsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocationsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
