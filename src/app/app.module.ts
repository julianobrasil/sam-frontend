// tslint:disable:ordered-imports
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/** ngrx */
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {SharedModule} from '../shared/shared.module';

import {AppComponent} from './app.component';

import {AppMainNavigationComponent} from './app-main-navigation/app-main-navigation.component';
import {AppRoutingModule} from './app-routing.module';
// tslint:enable:ordered-imports

@NgModule({
  declarations: [AppComponent, AppMainNavigationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    /** ngrx */
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),

    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
