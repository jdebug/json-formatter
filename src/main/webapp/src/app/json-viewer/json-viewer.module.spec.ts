import { JsonViewerModule } from './json-viewer.module';

describe('JsonViewerModule', () => {
  let jsonViewerModule: JsonViewerModule;

  beforeEach(() => {
    jsonViewerModule = new JsonViewerModule();
  });

  it('should create an instance', () => {
    expect(jsonViewerModule).toBeTruthy();
  });
});
