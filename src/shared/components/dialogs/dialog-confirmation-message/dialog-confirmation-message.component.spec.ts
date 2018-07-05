import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationMessageComponent } from './dialog-confirmation-message.component';

describe('DialogConfirmationMessageComponent', () => {
  let component: DialogConfirmationMessageComponent;
  let fixture: ComponentFixture<DialogConfirmationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmationMessageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
