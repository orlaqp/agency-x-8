import { Injectable } from '@angular/core';
import { ITheme } from '@agency-x/shared/data-access';

@Injectable()
export class StyleManagerService {

  changeTheme(theme: ITheme) {
      if (theme) {
          if (theme.isDefault) {
            this.removeStyle('theme');
          } else {
              this.setStyle('theme', `assets/themes/${theme.href}`);
          }
      }
  }

  /**
   * Set the stylesheet with the specified key.
   */
  private setStyle(key: string, href: string) {
      getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  private removeStyle(key: string) {
      const existingLinkElement = getExistingLinkElementByKey(key);
      if (existingLinkElement) {
          document.head.removeChild(existingLinkElement);
      }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}
