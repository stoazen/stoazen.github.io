import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 網站標題與標語不在翻譯檔的範圍內，依建置中的語系挑選。
// Docusaurus 建置每個語系時會設定 DOCUSAURUS_CURRENT_LOCALE。
const SITE_META: Record<string, { title: string; tagline: string }> = {
  "zh-TW": { title: "StoaZen 斯多禪", tagline: "人生難題，抽一張錦囊" },
  en: { title: "StoaZen", tagline: "Stoic & Zen wisdom. Find calm." },
};
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? "zh-TW";
const siteMeta = SITE_META[currentLocale] ?? SITE_META["zh-TW"];
// 頁尾的 App Store 連結：中文連台灣商店，英文連美國商店（同 src/data/stores.ts）。
const APP_STORE =
  currentLocale === "en"
    ? "https://apps.apple.com/us/app/stoazen-%E6%96%AF%E5%A4%9A%E7%A6%AA/id6806759300"
    : "https://apps.apple.com/tw/app/stoazen-%E6%96%AF%E5%A4%9A%E7%A6%AA/id6806759300";

const config: Config = {
  title: siteMeta.title,
  tagline: siteMeta.tagline,
  favicon: "/img/favicon.ico",

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600&display=swap",
      type: "text/css",
    },
  ],

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

  // 預設語系 zh-TW 走根路徑 /，英文在 /en/ 底下。
  // 翻譯檔在 i18n/<locale>/，新增字串後用 `npm run write-translations -- --locale en` 產生。
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW", "en"],
    localeConfigs: {
      "zh-TW": { label: "繁體中文", htmlLang: "zh-TW" },
      en: { label: "English", htmlLang: "en" },
    },
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
        alt: siteMeta.title,
        src: "img/logo.png",
      },
      items: [
        { to: "/#features", label: "功能", position: "left" },
        { to: "/explore", label: "探索", position: "left" },
        { to: "/blog", label: "文章", position: "left" },
        { to: "/about", label: "關於", position: "left" },
        { type: "localeDropdown", position: "right" },
        {
          to: "/#download",
          label: "下載 App",
          position: "right",
          className: "navbar__download-cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "產品",
          items: [
            {
              label: "使用方式",
              to: "/#how",
            },
            {
              label: "抽卡主題",
              to: "/#themes",
            },
            {
              label: "功能",
              to: "/#features",
            },
            {
              label: "使用指南",
              to: "/explore/guide",
            },
            {
              label: "常見問題",
              to: "/explore/faq",
            },
            {
              label: "文章",
              to: "/blog",
            },
          ],
        },
        {
          title: "社群",
          items: [
            {
              label: "電子報",
              href: "https://stoazen.substack.com/",
            },
            {
              label: "Facebook 社團",
              href: "https://facebook.com/groups/stoazen",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/stoazen_com",
            },
            {
              label: "Facebook 粉絲專頁",
              href: "https://www.facebook.com/stoazen",
            },
          ],
        },
        {
          title: "下載 App",
          items: [
            {
              label: "App Store",
              href: APP_STORE,
            },
            {
              label: "Google Play（即將上架）",
              to: "/#download",
            },
            {
              label: "瀏覽器擴充功能（即將推出）",
              to: "/#download",
            },
          ],
        },
        {
          title: "關於",
          items: [
            {
              label: "關於 StoaZen",
              to: "/about",
            },
            {
              label: "隱私權政策",
              to: "/privacy",
            },
            {
              label: "聯絡信箱",
              href: "mailto:stoazen.com@gmail.com",
            },
          ],
        },
        {
          // 畫成語言下拉選單，見 src/theme/Footer/LinkItem。
          // label 與 `to` 只是設定格式要求的佔位，不會顯示。
          title: "語言",
          items: [{ label: "語言", to: "/", localeDropdown: true }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${siteMeta.title}. Built with ❤️ by <a target="_blank" href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
