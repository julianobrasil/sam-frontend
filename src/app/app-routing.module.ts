import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppMainNavigationComponent} from './app-main-navigation/app-main-navigation.component';

const appRoutes: Routes = [
  {
    path: 'task',
    loadChildren: 'src/views/tasks/tasks.module#TasksModule',
    // canLoad: [AuthGuard],
  },
  {
    path: 'hierarchy',
    loadChildren: 'src/views/hierarchies/hierarchies.module#HierarchiesModule',
    // canLoad: [AuthGuard],
  },
  {
    path: 'alocation',
    loadChildren: 'src/views/alocations/alocations.module#AlocationsModule',
    // canLoad: [AuthGuard],
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  // { path: '**', component: AppPageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
