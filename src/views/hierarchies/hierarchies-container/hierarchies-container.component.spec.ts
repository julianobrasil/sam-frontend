import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchiesContainerComponent } from './hierarchies-container.component';

describe('HierarchiesContainerComponent', () => {
  let component: HierarchiesContainerComponent;
  let fixture: ComponentFixture<HierarchiesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchiesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
