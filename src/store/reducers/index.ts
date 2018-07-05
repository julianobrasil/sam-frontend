import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromTask from './tasks.reducer';

export interface TaskState {
  tasks: fromTask.TasksState;
}

export const reducers: ActionReducerMap<TaskState> = {
  tasks: fromTask.reducer,
};

export const getTaskState = createFeatureSelector<TaskState>('task');
