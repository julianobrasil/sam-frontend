// tslint:disable:max-line-length
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import { AuthGuard } from '../../auth/auth-guard.service';

import {HierarchiesContainerComponent} from './hierarchies-container/hierarchies-container.component';
// tslint:disable:max-line-length

const herarchiesRoutes: Routes = [
  {
    path: '',
    component: HierarchiesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(herarchiesRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class HierarchiesRoutingModule {}
