import { async, TestBed } from '@angular/core/testing';
import { HomeFeatureModule } from './home-feature.module';

describe('HomeFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeFeatureModule).toBeDefined();
  });
});
