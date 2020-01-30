import { async, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from './angular-material.module';

describe('AngularMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularMaterialModule).toBeDefined();
  });
});
