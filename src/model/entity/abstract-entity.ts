export abstract class AbstractEntity {
  id: number;
  version = 0;
  creationDate = new Date();
  createdBy = '';
  lasModifiedDate = new Date();
  lasModifiedBy = '';

  constructor() {
    this.creationDate = new Date();
    this.lasModifiedDate = new Date(this.creationDate);
  }
}
