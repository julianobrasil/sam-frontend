import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromTask from '../reducers/tasks.reducer';

export const getTasksState = createSelector(
  fromFeature.getTaskState,
  (state: fromFeature.TaskState) => state.tasks,
);

export const getTaskLoadedToEdit = createSelector(getTasksState, fromTask.getTaskLoadedToEdit);
