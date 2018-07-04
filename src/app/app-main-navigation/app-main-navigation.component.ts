import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Component} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-app-main-navigation',
  templateUrl: './app-main-navigation.component.html',
  styleUrls: ['./app-main-navigation.component.scss'],
})
export class AppMainNavigationComponent {
  _isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
}
