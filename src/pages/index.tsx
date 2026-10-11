import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HeroCard(): ReactNode {
  return (
    <div className={styles.device} aria-hidden="true">
      <div className={styles.deviceScreen}>
        <p className={styles.deviceTopic}>焦慮不安</p>
        <div className={styles.quoteCard}>
          <span className={styles.quoteSchool}>斯多葛</span>
          <p className={styles.quoteText}>
            我們在想像中受的苦，往往比在現實中受的苦更多。
          </p>
          <p className={styles.quoteAuthor}>塞內卡</p>
          <p className={styles.quoteSource}>致盧基里烏斯書信集 13</p>
        </div>
        <p className={styles.deviceHint}>點卡片看解說</p>
        <div className={styles.deviceTabs}>
          <span className={styles.deviceTabActive}>抽卡</span>
          <span>禪修</span>
          <span>收藏</span>
          <span>紀錄</span>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>禪語・斯多葛哲學・心理學</p>
            <Heading as="h1" className={styles.heroTitle}>
              人生難題，
              <br />
              抽一張錦囊
            </Heading>
            <p className={styles.heroLead}>
              StoaZen 斯多禪收錄 180 則來自禪宗典籍、斯多葛哲學與現代心理學的金句。心裡有事時，選一個困擾的主題抽一張卡，讓一句話陪你換個角度看；想靜下來時，跟著呼吸禪修一分鐘。
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to="#download">
                取得 App
              </Link>
              <Link className={styles.btnGhost} to="#how">
                了解使用方式
              </Link>
            </div>
            <p className={styles.heroNote}>iOS 與 Android 版即將上架，免費使用</p>
          </div>
          <div className={styles.heroVisual}>
            <HeroCard />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="人生難題，抽一張錦囊"
      description="StoaZen 斯多禪收錄 180 則禪語、斯多葛哲學與心理學金句。依困擾主題抽卡、靜默禪修、收藏與記錄，iOS 與 Android 即將上架。"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
