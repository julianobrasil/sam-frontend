import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogConfirmationMessageData {
  title: string;
  message: string;
  buttonTrueText: string;
  buttonTrueVisible: boolean;
  buttonFalseText: string;
  buttonFalseVisible: boolean;
  buttonTrueDisabled: boolean;
  buttonFalseDisabled: boolean;
}

@Component({
  selector: 'app-dialog-confirmation-message',
  templateUrl: './dialog-confirmation-message.component.html',
  styleUrls: ['./dialog-confirmation-message.component.scss'],
})
export class DialogConfirmationMessageComponent {
  _dialogData: DialogConfirmationMessageData = {
    title: '',
    message: '',
    buttonTrueText: 'Sim',
    buttonTrueVisible: true,
    buttonFalseText: 'Não',
    buttonFalseVisible: true,
    buttonTrueDisabled: false,
    buttonFalseDisabled: false,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: DialogConfirmationMessageData,
    public dialogRef: MatDialogRef<DialogConfirmationMessageComponent>,
  ) {
    if (this._data) {
      this._dialogData = {
        ...this._dialogData,
        ...this._data,
      };
    }
  }
}
