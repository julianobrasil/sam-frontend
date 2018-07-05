import {Component, OnInit} from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../store';
import * as fromTasks from '../../../store/selectors/tasks.selectors';

import {Task} from '../../../model/entity';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate('0.5s 0.5s ease-in'),
      ]),
      transition('* => void', [
        style({height: '*'}),
        animate('0.5s 0.1s ease-out', style({height: 0})),
      ]),
    ]),
  ],
})
export class TasksContainerComponent {
  /** show the task form and tasks list */
  _taskCreationSectionIsVisible = true;

  /** show the employee alocation form and the alocated employees list */
  _employeeAlocationSectionIsVisible = false;

  _taskToEdit$: Observable<Task> = this._store.select(fromTasks.getTaskLoadedToEdit);

  constructor(private _store: Store<fromStore.TaskState>) {}

  /** decide whether to show the taks component or the alocation component */
  _showTaskCreationSection(show: boolean) {
    if (show) {
      this._employeeAlocationSectionIsVisible = false;
      setTimeout(() => (this._taskCreationSectionIsVisible = true), 500);
    } else {
      this._taskCreationSectionIsVisible = false;
      setTimeout(() => (this._employeeAlocationSectionIsVisible = true), 500);
    }
  }

  /** save task */
  _saveTask(t: Task) {}

  /** load task on the task form */
  _loadTaskOnTheForm(task: Task) {
    this._store.dispatch(new fromStore.SelectTaskToEditAction({task}));
  }

  /** remove the task */
  _removeTask(taskId: number) {}
}
