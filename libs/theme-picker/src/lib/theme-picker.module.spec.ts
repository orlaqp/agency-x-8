import { async, TestBed } from '@angular/core/testing';
import { ThemePickerModule } from './theme-picker.module';

describe('ThemePickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemePickerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ThemePickerModule).toBeDefined();
  });
});
