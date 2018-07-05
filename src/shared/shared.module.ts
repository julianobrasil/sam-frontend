// tslint:disable:max-line-length
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../custom-material/material.module';

import {DialogConfirmationMessageComponent} from './components/dialogs/dialog-confirmation-message/dialog-confirmation-message.component';
// tslint:enable:max-line-length

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [DialogConfirmationMessageComponent],
  entryComponents: [DialogConfirmationMessageComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
