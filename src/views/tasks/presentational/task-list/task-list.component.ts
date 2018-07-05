
// tslint:disable:max-line-length
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {MatDialog} from '@angular/material';

import {Task} from '../../../../model/entity';
import {
  DialogConfirmationMessageComponent,
  DialogConfirmationMessageData,
} from '../../../../shared/components/dialogs/dialog-confirmation-message/dialog-confirmation-message.component';
// tslint:enable:max-line-length

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  /** task list to show */
  @Input() tasks: Task[] = [];

  /** emits when a task is supposed to be removed */
  @Output() taskRemoved: EventEmitter<number> = new EventEmitter<number>();

  /** emits when a task is supposed to be edited */
  @Output() taskToEdit: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private _dialog: MatDialog) {}

  /** emits when the task must be loaded in any form */
  _editTask(t: Task) {
    if (t) {
      this.taskToEdit.emit(t);
    }
  }

  /** check whether the user really wants to remove the task */
  _removeTask(taskId: number) {
    if (!taskId) {
      return;
    }
    const data: DialogConfirmationMessageData = {
      title: 'Exclusão de tarefa',
      message: 'Você está prestes a excluir uma tarefa',
      buttonTrueText: 'Entendi, pode continuar',
      buttonTrueVisible: true,
      buttonFalseText: 'Não quero excluir',
      buttonFalseVisible: true,
      buttonTrueDisabled: false,
      buttonFalseDisabled: false,
    };
    const dialogRef = this._dialog.open<
      DialogConfirmationMessageComponent,
      DialogConfirmationMessageData,
      boolean
    >(DialogConfirmationMessageComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((isTrue: boolean) => {
      if (isTrue) {
        this._goOnAndRemoveTask(taskId);
      }
    });

    if (taskId) {
      this.taskRemoved.emit(taskId);
    }
  }

  /** remove the task after the user has confirmed */
  private _goOnAndRemoveTask(taskId: number) {
    if (taskId) {
      this.taskRemoved.emit(taskId);
    }
  }
}
