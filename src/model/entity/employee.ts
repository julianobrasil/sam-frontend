import {AbstractEntity} from './abstract-entity';

export class Employee extends AbstractEntity {
  constructor(public name?: string, public email?: string) {
    super();
  }
}
