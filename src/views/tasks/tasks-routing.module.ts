import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from '../../auth/auth-guard.service';

import { TasksContainerComponent } from './tasks-container/tasks-container.component';

const tasksRoutes: Routes = [
  {
    path: '', component: TasksContainerComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class TasksRoutingModule { }
