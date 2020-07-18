export interface ITheme {
  id: string;
  primary: string;
  accent: string
  isDark: boolean;
  href: string;
  isDefault: boolean;
}

export interface ILanguage {
  name: string;
  href: string;
  isDefault: boolean;
}

export interface IOidcConfig {
    stsServer: string;
    redirectUrl: string;
    postLogoutRedirectUri: string;
    clientId: string;
    scope: string;
    responseType: string;
    silentRenew: boolean;
    useRefreshToken: boolean;
    logLevel: number;
    locale: string;
}
