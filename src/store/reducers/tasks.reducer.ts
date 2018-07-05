import {Task} from '../../model/entity';

import * as fromTask from '../actions/tasks.actions';

export interface TasksState {
  views: {
    taskFormComponent: {
      taskLoadedToEdit: Task;
    };
  };
}

export const initialState: TasksState = {
  views: {
    taskFormComponent: {
      taskLoadedToEdit: null,
    },
  },
};

export function reducer(state: TasksState = initialState, action: fromTask.TaskAction) {
  switch (action.type) {
    case fromTask.SELECT_TASK_TO_EDIT: {
      const views = {
        ...state.views,
        taskFormComponent: {
          ...state.views.taskFormComponent,
          taskLoadedToEdit: action.payload.task,
        },
      };
      state = {
        ...state,
        views,
      };
    }
  }

  return state;
}

export const getTaskLoadedToEdit = (state: TasksState) =>
  state && state.views && state.views.taskFormComponent
    ? state.views.taskFormComponent.taskLoadedToEdit
    : null;
