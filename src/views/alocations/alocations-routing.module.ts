import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import { AuthGuard } from '../../auth/auth-guard.service';

import {AlocationsContainerComponent} from './alocations-container/alocations-container.component';

const alocationsRoutes: Routes = [
  {
    path: '',
    component: AlocationsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(alocationsRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AlocationsRoutingModule {}
