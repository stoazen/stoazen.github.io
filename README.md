# stoazen


## 中英雙語

中文（zh-TW）在根路徑 `/`，英文在 `/en/`。右上角與頁尾都有語言選單。

- 首頁文字用 `translate()`／`<Translate>`，英文在 `i18n/en/code.json`。改了中文或新增字串後跑 `npm run write-translations -- --locale en`，再把新的英文填進去。
- 導覽列與頁尾的英文在 `i18n/en/docusaurus-theme-classic/{navbar,footer}.json`。
- 文章、指南、關於、隱私權政策的英文版放在 `i18n/en/docusaurus-plugin-content-{blog,docs/current,pages}/`，檔名跟中文版一樣。新增中文文章時，記得補英文版，否則英文站會顯示中文原文。
- 引用斯多葛原典的英文時，只用公有領域譯本（George Long、Gummere、Stewart 等）或自譯，不要用 Gregory Hays 等現代譯本。
- App Store 連結在 `src/data/stores.ts`：中文頁連台灣商店，英文頁連美國商店。
