import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "StoaZen 斯多禪",
  tagline: "專注當下・自我掌控・心靈平靜",
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.stoazen.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stoazen", // Usually your GitHub org/user name.
  projectName: "stoazen.github.io", // repo

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-5F8XFHHC", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/explore",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        docsRouteBasePath: "/explore",
        blogRouteBasePath: "/blog",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://stoazen.github.io/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "StoaZen",
      logo: {
        alt: "StoaZen 斯多禪",
        src: "img/logo.png",
      },
      items: [
        { to: "/blog", label: "最新文章", position: "left" },
        { to: "/about", label: "關於我們", position: "left" },
        {
          href: "#",
          label: "立即下載",
          position: "right",
          className: "navbar__download-cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "探索",
          items: [
            {
              label: "最新文章",
              to: "/blog",
            },

            {
              label: "斯多葛哲學",
              href: "#",
            },
            {
              label: "阿德勒心理學",
              href: "#",
            },
            {
              label: "正念與禪修",
              href: "#",
            },
          ],
        },
        {
          title: "斯多禪社群",
          items: [
            {
              label: "Facebook 斯多禪交流社群",
              href: "https://facebook.com/groups/stoazen",
            },
            {
              label: "追蹤 Instagram",
              href: "https://www.instagram.com/stoazen_com",
            },
            {
              label: "追蹤 Facebook",
              href: "https://www.facebook.com/stoazen",
            },
          ],
        },
        {
          title: "下載 App",
          items: [
            {
              label: "App Store (即將上線)",
              href: "#",
            },
            {
              label: "Google Play (即將上線)",
              href: "#",
            },
          ],
        },
        {
          title: "聯絡我們",
          items: [
            {
              label: "關於我們",
              to: "/about",
            },
            {
              label: "隱私政策",
              to: "/privacy",
            },
            {
              label: "寫信給我們",
              to: "mailto:stoazen.com@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StoaZen 斯多禪. Built with ❤️ by <a target="_blank" href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
