import {Employee} from '.';
import {AbstractEntity} from './abstract-entity';

import {TaskStatus} from '../types';

import {Moment} from 'moment';

export class Task extends AbstractEntity {
  constructor(
    public description?: string,
    public startDate?: Moment,
    public endDate?: Moment,
    public suggestedDeadline?: Moment,
    public status?: TaskStatus,
    public owner?: Employee,
  ) {
    super();
  }
}
