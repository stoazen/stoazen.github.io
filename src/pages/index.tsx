import { useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import { useAppStoreLink } from "@site/src/data/stores";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HeroCard(): ReactNode {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={styles.device}>
      <div className={styles.deviceScreen}>
        <p className={styles.deviceTopic}>
          <Translate id="homepage.hero.card.topic">焦慮不安</Translate>
        </p>
        <button
          type="button"
          className={clsx(styles.flipCard, flipped && styles.flipped)}
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={
            flipped
              ? translate({ id: "homepage.hero.card.flipBack", message: "翻回金句" })
              : translate({ id: "homepage.hero.card.flip", message: "翻到背面看白話解說" })
          }
        >
          <span className={styles.flipInner}>
            <span className={clsx(styles.quoteCard, styles.cardFront)} aria-hidden={flipped}>
              <span className={styles.quoteSchool}>
                <Translate id="homepage.hero.card.school">斯多葛</Translate>
              </span>
              <span className={styles.quoteText}>
                <Translate id="homepage.hero.card.quote">我們在想像中受的苦，往往比在現實中受的苦更多。</Translate>
              </span>
              <span className={styles.quoteAuthor}>
                <Translate id="homepage.hero.card.author">塞內卡</Translate>
              </span>
              <span className={styles.quoteSource}>
                <Translate id="homepage.hero.card.source">致盧基里烏斯書信集 13</Translate>
              </span>
            </span>
            <span className={clsx(styles.quoteCard, styles.cardBack)} aria-hidden={!flipped}>
              <span className={styles.quoteSchool}>
                <Translate id="homepage.hero.card.noteLabel">白話解說</Translate>
              </span>
              <span className={styles.noteText}>
                <Translate id="homepage.hero.card.note">腦中預演最壞結果、越想越焦慮時，問自己：現在，此刻，實際發生了什麼？通常只有想像在燃燒。</Translate>
              </span>
              <span className={styles.noteRule} />
              <span className={styles.quoteSource}>
                <Translate id="homepage.hero.card.noteSource">塞內卡《致盧基里烏斯書信集》13</Translate>
              </span>
            </span>
          </span>
        </button>
        <p className={styles.deviceHint} aria-live="polite">
          {flipped
            ? translate({ id: "homepage.hero.card.hintBack", message: "再點一下，翻回金句" })
            : translate({ id: "homepage.hero.card.hint", message: "點卡片看解說" })}
        </p>
        <div className={styles.deviceTabs} aria-hidden="true">
          <span className={styles.deviceTabActive}>
            <Translate id="homepage.hero.tabs.draw">抽卡</Translate>
          </span>
          <span><Translate id="homepage.hero.tabs.sit">禪修</Translate></span>
          <span><Translate id="homepage.hero.tabs.saved">收藏</Translate></span>
          <span><Translate id="homepage.hero.tabs.progress">紀錄</Translate></span>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader(): ReactNode {
  const appStore = useAppStoreLink();
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>
              <Translate id="homepage.hero.eyebrow">禪語・斯多葛哲學・心理學</Translate>
            </p>
            <Heading as="h1" className={styles.heroTitle}>
              <Translate
                id="homepage.hero.title"
                values={{ br: <br /> }}
              >
                {"人生難題，{br}抽一張錦囊"}
              </Translate>
            </Heading>
            <p className={styles.heroLead}>
              <Translate id="homepage.hero.lead">StoaZen 斯多禪收錄 180 則來自禪宗典籍、斯多葛哲學與現代心理學的金句。心裡有事時，選一個困擾的主題抽一張卡，讓一句話陪你換個角度看；想靜下來時，跟著呼吸禪修一分鐘。</Translate>
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} href={appStore}>
                <Translate id="homepage.hero.cta">App Store 下載</Translate>
              </Link>
              <Link className={styles.btnGhost} to="#how">
                <Translate id="homepage.hero.howLink">了解使用方式</Translate>
              </Link>
            </div>
            <p className={styles.heroNote}>
              <Translate id="homepage.hero.note">免費使用・iOS 已上架，Android 即將推出</Translate>
            </p>
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
      title={translate({ id: "homepage.meta.title", message: "人生難題，抽一張錦囊" })}
      description={translate({ id: "homepage.meta.description", message: "StoaZen 斯多禪收錄 180 則禪語、斯多葛哲學與心理學金句。依困擾主題抽卡、靜默禪修、收藏與記錄，iOS 版已在 App Store 上架。" })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
