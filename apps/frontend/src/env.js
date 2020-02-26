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
    // {
    //   name: "English",
    //   href: "http://localhost:4200",
    //   isDefault: true
    // },
    // {
    //   name: "Spanish",
    //   href: "http://localhost:4300"
    // },
    {
      name: "English",
      href: "http://localhost:8080/frontend-en",
      isDefault: true
    },
    {
      name: "Spanish",
      href: "http://localhost:8080/frontend-es"
    },
  ]

  window.__env = {
    debugMode: true,
    themes: themes,
    languages: languages
  };

})(this);
