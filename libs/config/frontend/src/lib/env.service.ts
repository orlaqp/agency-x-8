import { ITheme, ILanguage } from '@agency-x/shared/data-access';

export class EnvService {
  debugMode = true;
  themes: ITheme[] = [];
  languages: ILanguage[];
}
