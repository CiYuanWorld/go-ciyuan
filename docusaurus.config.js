// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Go次元',
  tagline: '欢迎来到Go次元世界.',
  url: 'https://learngo.ciyuan.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XinCiYuan', // Usually your GitHub org/user name.
  projectName: 'learngo', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Go次元',
        logo: {
          alt: 'Go次元的LOGO',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'GoByExample',
            type: 'docSidebar',
            sidebarId: 'gobyexample',
            position: 'left',
            // //
            // docId: 'gobyexample',
            // path: 'gobyexample'
            // activeBasePath: "gobyexample",
          },
          {
            label: 'GoGist',
            type: 'docSidebar',
            sidebarId: 'gogist',
            position: 'left',
          },
          {
            label: 'Go编程导航',
            type: 'docSidebar',
            sidebarId: 'gonav',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'right',
        //     label: '文档参考',
        //   },
          {
            label: '我的片段库',
            type: 'docSidebar',
            sidebarId: 'mygist',
            position: 'right',
          },
          {
            label: '我的导航',
            type: 'docSidebar',
            sidebarId: 'mynav',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
                {
                    label: 'Go语言中文网',
                    href: 'https://studygolang.com/',
                },
                {
                    label: 'Go网址导航',
                    href: 'https://hao.studygolang.com/',
                },
            ],
          },
          {
            title: 'Go社区',
            items: [
                {
                    label: 'Go语言中文网',
                    href: 'https://studygolang.com/topics',
                  },
              {
                label: 'GoCN社区',
                href: 'https://gocn.vip/topics',
              },
            ],
          },
          {
            title: '更多',
            items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
              {
                label: '组织 GitHub',
                href: 'https://github.com/CiYuanWorld',
              },
              {
                label: '作者 GitHub',
                href: 'https://github.com/wu2kong',
              },
            {
                    label: '悟二空的小站',
                    href: 'https://wu2kong.com/',
                },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/CiYuanWorld" target="_blank">次元世界</a>, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
