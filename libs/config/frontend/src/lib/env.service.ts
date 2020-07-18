import { ITheme, ILanguage, IOidcConfig } from '@agency-x/shared/data-access';
import { Injectable } from '@angular/core';

@Injectable()
export class EnvService {
  debugMode = true;
  themes: ITheme[] = [];
  languages: ILanguage[];
  oidcConfig: IOidcConfig;
}
