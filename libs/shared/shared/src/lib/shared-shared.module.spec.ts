import { async, TestBed } from '@angular/core/testing';
import { SharedSharedModule } from './shared-shared.module';

describe('SharedSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSharedModule).toBeDefined();
  });
});
