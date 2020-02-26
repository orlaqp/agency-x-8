import { Injectable } from '@angular/core';
import { ILanguage } from './interfaces';

@Injectable()
export class LanguageManagerService {

  changeLanguage(lang: ILanguage) {
    if (lang && !window.location.href.startsWith(lang.href)) {
      const baseRef = document.getElementsByTagName('base')[0].href;
      const pathname = window.location.href.replace(baseRef, '');
      window.location.href = lang.href + pathname;
    }
  }

}
