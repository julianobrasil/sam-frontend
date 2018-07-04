import {LOCALE_ID, NgModule} from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';

import {SatPopoverModule} from '@ncstate/sat-popover';

import {
  MAT_MOMENT_DATE_FORMATS,
  MatMomentDateModule,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

import {registerLocaleData} from '@angular/common';

import localePTBR from '@angular/common/locales/pt';
registerLocaleData(localePTBR);

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  /** Paginator i18n */
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import {LayoutModule} from '@angular/cdk/layout';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import {MatPaginatorIntlPtBr} from './i18n/mat-paginator-intl-pt-br';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    /** @angular/cdk */
    LayoutModule,
    ScrollDispatchModule,

    /** @angular/material-moment-adapter */
    MatMomentDateModule,

    /** Will's popover */
    SatPopoverModule,
  ],
  providers: [
    /** settings for MomentDateAdapter */
    {provide: MAT_DATE_LOCALE, useValue: 'pt'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},

    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr},
  ],
})
export class MaterialModule {}
