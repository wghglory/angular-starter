import { ConfigureModule } from './configure.module';

describe('ConfigureModule', () => {
  let configureModule: ConfigureModule;

  beforeEach(() => {
    configureModule = new ConfigureModule();
  });

  it('should create an instance', () => {
    expect(configureModule).toBeTruthy();
  });
});
