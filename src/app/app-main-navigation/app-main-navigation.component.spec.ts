
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppMainNavigationComponent } from './app-main-navigation.component';

describe('AppMainNavigationComponent', () => {
  let component: AppMainNavigationComponent;
  let fixture: ComponentFixture<AppMainNavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [AppMainNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
