import { NgModule, FactoryProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvService } from './env.service';
import { EnvServiceFactory } from './env.service.factory';

const envServiceProvider: FactoryProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: []
}

@NgModule({
  imports: [CommonModule],
  providers: [ envServiceProvider ]
})
export class ConfigFrontendModule {}
