import { async, TestBed } from '@angular/core/testing';
import { LanguagePickerModule } from './language-picker.module';

describe('LanguagePickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LanguagePickerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LanguagePickerModule).toBeDefined();
  });
});
