import { async, TestBed } from '@angular/core/testing';
import { ConfigFrontendModule } from './config-frontend.module';

describe('ConfigFrontendModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfigFrontendModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConfigFrontendModule).toBeDefined();
  });
});
