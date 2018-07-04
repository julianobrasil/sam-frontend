import { TasksModule } from './tasks.module';

describe('TasksModule', () => {
  let tarefasModule: TasksModule;

  beforeEach(() => {
    tarefasModule = new TasksModule();
  });

  it('should create an instance', () => {
    expect(tarefasModule).toBeTruthy();
  });
});
