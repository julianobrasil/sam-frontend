// tslint:disable:max-line-length
import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {HierarchiesRoutingModule} from './hierarchies-routing.module';

import {HierarchiesContainerComponent} from './hierarchies-container/hierarchies-container.component';
// tslint:enable:max-line-length

@NgModule({
  imports: [SharedModule, HierarchiesRoutingModule],
  declarations: [HierarchiesContainerComponent],
  exports: [HierarchiesContainerComponent],
})
export class HierarchiesModule {}
