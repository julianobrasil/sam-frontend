import {Action} from '@ngrx/store';

import {Task} from '../../model/entity';

export const SELECT_TASK_TO_EDIT = '[Task Component] Select a task to edit';

export class SelectTaskToEditAction implements Action {
  readonly type = SELECT_TASK_TO_EDIT;

  constructor(public payload: {task: Task}) {}
}

export type TaskAction = SelectTaskToEditAction;
