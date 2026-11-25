import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// App 商店連結：中文頁連台灣 App Store，英文頁連美國 App Store。
// docusaurus.config.ts 的頁尾也用這兩個網址。
export const APP_STORE_TW =
  "https://apps.apple.com/tw/app/stoazen-%E6%96%AF%E5%A4%9A%E7%A6%AA/id6806759300";
export const APP_STORE_US =
  "https://apps.apple.com/us/app/stoazen-%E6%96%AF%E5%A4%9A%E7%A6%AA/id6806759300";

/** 目前語系的 App Store 網址。 */
export function useAppStoreLink(): string {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  return currentLocale === "en" ? APP_STORE_US : APP_STORE_TW;
}
