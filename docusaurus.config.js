const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Handpoint',
  tagline: 'Card payments. Made simple',
  url: 'https://www.google.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',
  organizationName: 'handpoint', // Usually your GitHub org/user name.
  projectName: 'documentation-docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      style: 'dark',
      logo: {
        alt: 'My Site Logo',
        src: 'img/handpoint-logo-hvitt.svg',
        width: 90
        
      },
      items: [

        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        // {
        //   type: 'docsVersionDropdown',

        //    position:'left'
        //    },
        // {
        //   type: 'doc',
        //   position: 'left',
        //   label: 'Android SDK',
        //   docId: 'intro'
        // },
        {
          className: 'navbar-statuspage-icon',
          href:'https://status.handpoint.com',
          position:'right',
          'aria-label': 'Status Page',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'android',
        },
        // {
        //   type:'doc',
        //   position: 'left',
        //   label: 'iOS SDK',
        //   path:'/ios',
        //   docId: 'iosintroduction'
        // },
        {
          type: 'docsVersionDropdown',
            docsPluginId: 'ios',
            activeBasePath:'./ios_versioned_docs/'
        },
        // {
        //   type: 'docsVersion',
        //   position: 'left',
        //   to: '/windows/windowsintroduction',
        //   label: 'Windows SDK',
        //   docsPluginId: 'windows'
        // },
        {
          type: 'docsVersionDropdown',
            docsPluginId: 'windows',
        },
        // {
        //   type: 'docsVersion',
        //   position: 'left',
        //   to: '/javascript/javascriptintroduction',
        //   label: 'JavaScript SDK',
        //   docsPluginId: 'javascript'
        // },
        {
          type: 'docsVersionDropdown',
            docsPluginId: 'javascript',
            activeBaseRegex:'javascript_versioned_docs/'
        },
        // {
        //   type: 'docsVersion',
        //   position: 'left',
        //   to: '/restapi/restintroduction',
        //   label: 'REST API',
        //   docsPluginId: 'restapi'
        // },
        {
          type: 'docsVersionDropdown',
            docsPluginId: 'restapi',
        },
        {
          type: 'docsVersionDropdown',
            docsPluginId: 'express',
        },
        {
          
          href: 'https://www.npmjs.com/package/cordova-plugin-handpoint',
         label: 'Cordova Plugin',
        
       },
       {
          
        href: 'https://github.com/thescruba/xamarin-handpoint-bindings',
       label: 'Xamarin SDK',
      
     },
        {
          
           href: 'https://www.handpoint.com/docs/txnfeedapi/',
          label: 'TXN Feed API',
         
        }, 
        {
          
          href: 'https://handpoint.atlassian.net/wiki/spaces/PD/overview?homepageId=5898250',
          label: 'FAQ',
        },
        

        // {
        //   href: 'https://github.com/handpoint',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs Legacy',
          items: [
            {
              label: 'Docs',
              href: 'https://www.handpoint.com/docs/device/Basics/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Handpoint',
              href: 'https://www.handpoint.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/handpoint',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/handpointltd?lang=en',
            },
          ],
        },
        {
          title: 'Get our Apps',
          items: [
            {
              label: 'Get it on Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.handpoint.hipos&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
            },
          
            {
              label: 'Download on the App Store',
              href: 'https://apps.apple.com/us/app/handpoint/id1450546788?itsct=apps_box_link&itscg=30200',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Handpoint Status Page',
              href: 'https://status.handpoint.com',
            },
            {
              label: 'FAQ',
              href: 'https://handpoint.atlassian.net/wiki/spaces/PD/overview?homepageId=5898250',
            },
            {
              label: 'Subscribe to the Handpoint Newsletter',
              href: 'https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e',
            },
          
            {
              label: 'GitHub',
              href: 'https://github.com/handpoint',
            },
          ],
        },
      ],
      logo: {
        alt: 'Handpoint Logo',
        src: 'https://handpoint.imgix.net/handpoint-logo-w.png?w=150',
        href: 'https://www.handpoint.com'
      },
      // logo: {
      //   alt: 'Download on the App Store',
      //   src: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1560988800&h=f6bf5ef34e546a6c4ee5dfa277259cf2',
      //   href: 'https://apps.apple.com/us/app/handpoint/id1450546788?itsct=apps_box_link&itscg=30200',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Handpoint`,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java','groovy','csharp'],
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion:true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
     require.resolve('docusaurus-lunr-search',{
      
      
    
    })
     
  ,[
    '@docusaurus/plugin-content-docs',
    {
      id: 'ios',
      includeCurrentVersion:false,
      path:'ios',
      routeBasePath: 'ios',
      sidebarPath: require.resolve('./sidebarsIos.js'),
      sidebarCollapsed: false
      // ... other options
    },


  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'javascript',
      includeCurrentVersion:false,
      path: 'javascript',
      routeBasePath: 'javascript',
      sidebarPath: require.resolve('./sidebarsIos.js'),
      sidebarCollapsed: false
      // ... other options
    },

  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'restapi',
      includeCurrentVersion:false,
      path: 'restapi',
      routeBasePath: 'restapi',
      sidebarPath: require.resolve('./sidebarsIos.js'),
      sidebarCollapsed: false
      // ... other options
    },

  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'windows',
      includeCurrentVersion:false,
      path: 'windows',
      routeBasePath: 'windows',
      sidebarPath: require.resolve('./sidebarsIos.js'),
      sidebarCollapsed: false
      // ... other options
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'express',
      includeCurrentVersion:false,
      path: 'express',
      routeBasePath: 'express',
      sidebarPath: require.resolve('./sidebarsIos.js'),
      sidebarCollapsed: false
      // ... other options
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'android',
      includeCurrentVersion:false,
      path: './android',
      routeBasePath: 'android',
      sidebarPath: require.resolve('./sidebarsAndroid.js'),
      sidebarCollapsed: false
      
      // ... other options
    },

  ],
]

};
