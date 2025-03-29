const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Automock (Deprecated)',
  tagline: 'Automock has been transformed into Suites',
  url: 'https://automock.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Automock',
  projectName: 'automock.dev',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Roboto:wght@400;500;700&family=Urbanist:wght@500&display=swap',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://suites.dev',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'google',
        content: 'notranslate',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'refresh',
        content: '0;url=https://suites.dev',
      },
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
        gtag: {
          trackingID: 'G-K2J8XLLS52',
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: ['/docs', '/docs/*', '/api-reference', '/api-reference/*'],
            to: 'https://suites.dev',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/') || existingPath.includes('/api-reference/')) {
            return `https://suites.dev${existingPath}`;
          }
          return undefined;
        },
      },
    ],
  ],
  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'auto mocking, dependency injection, inversion of control, jest, sinon, nestjs, inversifyjs' },
      { name: 'description', content: 'Automock has been deprecated and transformed into Suites. Please visit suites.dev for the latest documentation.' },
      { property: 'og:title', content: 'Automock is now Suites' },
      { property: 'og:description', content: 'Automock has been deprecated and transformed into Suites. Please visit suites.dev for the latest documentation.' },
      { name: 'googlebot', content: 'noindex, follow' },
      { name: 'bingbot', content: 'noindex, follow' },
    ],
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    algolia: null,
    themes: ['@docusaurus/theme-classic'],
    navbar: {
      title: 'Automock (Deprecated)',
      logo: {
        alt: 'Automock Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://suites.dev',
          position: 'left',
          label: 'Go to Suites',
        },
        {
          href: 'https://github.com/suites-dev/suites/tree/master/docs/automock',
          position: 'left',
          label: 'Archived Docs',
        },
        {
          href: 'https://github.com/suites-dev/suites',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Released under the MIT License <br /> Copyright © 2020-2023 <strong>Omer Morad</strong> <br /> Hosted by Netlify`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;