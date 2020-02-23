import { async, TestBed } from '@angular/core/testing';
import { EmailInputModule } from './email-input.module';

describe('EmailInputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EmailInputModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EmailInputModule).toBeDefined();
  });
});
