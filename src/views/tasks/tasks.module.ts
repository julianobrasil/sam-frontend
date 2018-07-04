// tslint:disable:max-line-length
import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {TasksRoutingModule} from './tasks-routing.module';

import {ListaColaboradoresComponent} from './presentational/lista-colaboradores/lista-colaboradores.component';
import {TaskFormComponent} from './presentational/task-form/task-form.component';
import {TasksContainerComponent} from './tasks-container/tasks-container.component';
// tslint:enable:max-line-length

@NgModule({
  imports: [SharedModule, TasksRoutingModule],
  declarations: [TasksContainerComponent, TaskFormComponent, ListaColaboradoresComponent],
  exports: [TasksContainerComponent],
})
export class TasksModule {}
