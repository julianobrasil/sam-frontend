import { HierarchiesModule } from './hierarchies.module';

describe('HierarchiesModule', () => {
  let hierarchiesModule: HierarchiesModule;

  beforeEach(() => {
    hierarchiesModule = new HierarchiesModule();
  });

  it('should create an instance', () => {
    expect(hierarchiesModule).toBeTruthy();
  });
});
