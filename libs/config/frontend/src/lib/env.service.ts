import { ITheme, ILanguage } from '@agency-x/shared/shared';

export class EnvService {
  debugMode = true;
  themes: ITheme[] = [];
  languages: ILanguage[];
}
