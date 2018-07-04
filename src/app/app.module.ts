// tslint:disable:ordered-imports
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';

import {AppComponent} from './app.component';

import {AppMainNavigationComponent} from './app-main-navigation/app-main-navigation.component';
import {AppRoutingModule} from './app-routing.module';
// tslint:enable:ordered-imports

@NgModule({
  declarations: [AppComponent, AppMainNavigationComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
