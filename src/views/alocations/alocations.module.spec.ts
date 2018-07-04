import { AlocationsModule } from './alocations.module';

describe('AlocationsModule', () => {
  let alocationsModule: AlocationsModule;

  beforeEach(() => {
    alocationsModule = new AlocationsModule();
  });

  it('should create an instance', () => {
    expect(alocationsModule).toBeTruthy();
  });
});
