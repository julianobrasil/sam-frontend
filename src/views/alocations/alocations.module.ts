import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {AlocationsRoutingModule} from './alocations-routing.module';

import {AlocationsContainerComponent} from './alocations-container/alocations-container.component';

@NgModule({
  imports: [SharedModule, AlocationsRoutingModule],
  declarations: [AlocationsContainerComponent],
  exports: [AlocationsContainerComponent],
})
export class AlocationsModule {}
