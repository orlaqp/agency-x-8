(function(window) {

  var themes = [
    {
      id: 'amber-green',
      primary: '#ffc107',
      accent: '#4caf50',
      isDark: false,
      href: 'amber-green.css',
      isDefault: true
    },
    {
      id: 'dark-yellow',
      primary: '#0c081a',
      accent: '#ffeb3b',
      isDark: true,
      href: 'dark-yellow.css',
      isDefault: false
    },
    {
      id: 'deep-purple-green',
      primary: '#673ab7',
      accent: '#4caf50',
      isDark: true,
      href: 'deep-purple-green.css',
      isDefault: false
    },
    {
      id: 'pink-blue-gray',
      primary: '#e91e63',
      accent: '#607d8b',
      isDark: false,
      href: 'pink-blue-gray.css',
      isDefault: false
    },
  ];

  const languages = [
    {
      name: "English",
      href: "http://localhost:4200",
      isDefault: true
    },
    {
      name: "Spanish",
      href: "http://localhost:4300"
    },
    // {
    //   name: "English",
    //   href: "http://localhost:8080/frontend-en",
    //   isDefault: true
    // },
    // {
    //   name: "Spanish",
    //   href: "http://localhost:8080/frontend-es"
    // },
  ];

  oidcConfig = {
    stsServer: 'http://127.0.0.1:8080/auth/realms/agency-x',
    redirectUrl: window.location.origin,
    // postLogoutRedirectUri: window.location.origin,
    clientId: 'web-app',
    scope: 'openid profile email phone offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    logLevel: 1,
    locale: 'en',
    postLogoutRedirectUri: `${window.location.origin}/unauthorized`
  }

  window.__env = {
    debugMode: true,
    themes: themes,
    languages: languages,
    oidcConfig: oidcConfig
  };

})(this);
