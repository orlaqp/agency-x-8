import { Injectable } from '@angular/core';
import { ILanguage } from './interfaces';

@Injectable()
export class LanguageManagerService {

  changeLanguage(lang: ILanguage) {
    if (lang && !window.location.href.startsWith(lang.href)) {
      window.location.href = lang.href + window.location.pathname;
    }
  }

}
