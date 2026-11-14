import { useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HeroCard(): ReactNode {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={styles.device}>
      <div className={styles.deviceScreen}>
        <p className={styles.deviceTopic}>焦慮不安</p>
        <button
          type="button"
          className={clsx(styles.flipCard, flipped && styles.flipped)}
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? "翻回金句" : "翻到背面看白話解說"}
        >
          <span className={styles.flipInner}>
            <span className={clsx(styles.quoteCard, styles.cardFront)} aria-hidden={flipped}>
              <span className={styles.quoteSchool}>斯多葛</span>
              <span className={styles.quoteText}>
                我們在想像中受的苦，往往比在現實中受的苦更多。
              </span>
              <span className={styles.quoteAuthor}>塞內卡</span>
              <span className={styles.quoteSource}>致盧基里烏斯書信集 13</span>
            </span>
            <span className={clsx(styles.quoteCard, styles.cardBack)} aria-hidden={!flipped}>
              <span className={styles.quoteSchool}>白話解說</span>
              <span className={styles.noteText}>
                腦中預演最壞結果、越想越焦慮時，問自己：現在，此刻，實際發生了什麼？通常只有想像在燃燒。
              </span>
              <span className={styles.noteRule} />
              <span className={styles.quoteSource}>塞內卡《致盧基里烏斯書信集》13</span>
            </span>
          </span>
        </button>
        <p className={styles.deviceHint} aria-live="polite">
          {flipped ? "再點一下，翻回金句" : "點卡片看解說"}
        </p>
        <div className={styles.deviceTabs} aria-hidden="true">
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
