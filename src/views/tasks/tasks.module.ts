// tslint:disable:max-line-length
import {NgModule} from '@angular/core';

import {EffectsModule} from '@ngrx/effects';
import {Store, StoreModule} from '@ngrx/store';

import * as fromStore from '../../store';

import {SharedModule} from '../../shared/shared.module';
import {TasksRoutingModule} from './tasks-routing.module';

import {AlocatedEmployeeListComponent} from './presentational/alocated-employee-list/alocated-employee-list.component';
import {EmployeeAlocationFormComponent} from './presentational/employee-alocation-form/employee-alocation-form.component';
import {TaskFormComponent} from './presentational/task-form/task-form.component';
import {TaskListComponent} from './presentational/task-list/task-list.component';
import {TasksContainerComponent} from './tasks-container/tasks-container.component';

import {StatusPipe} from './presentational/task-list/pipes/status.pipe';
// tslint:enable:max-line-length

@NgModule({
  imports: [
    SharedModule,
    TasksRoutingModule /** ngrx */,
    StoreModule.forFeature('task', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
  declarations: [
    AlocatedEmployeeListComponent,
    EmployeeAlocationFormComponent,
    TaskFormComponent,
    TaskListComponent,
    TasksContainerComponent,

    /** pipes */
    StatusPipe,
  ],
  exports: [TasksContainerComponent],
})
export class TasksModule {}
