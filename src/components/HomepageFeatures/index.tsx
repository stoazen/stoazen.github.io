import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import { useAppStoreLink } from "@site/src/data/stores";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";
import styles from "./styles.module.css";

function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
}): ReactNode {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading as="h2" id={id} className={styles.sectionTitle}>
        {title}
      </Heading>
      {lead && <p className={styles.sectionLead}>{lead}</p>}
    </div>
  );
}

const getSteps = () => [
  {
    title: translate({ id: "homepage.how.step1.title", message: "說出困擾" }),
    body: translate({ id: "homepage.how.step1.body", message: "從八個生活主題中，選出此刻最貼近你的那一個。沒有特定煩惱時，就選「隨緣」。" }),
  },
  {
    title: translate({ id: "homepage.how.step2.title", message: "抽一張卡" }),
    body: translate({ id: "homepage.how.step2.body", message: "從對應的禪語、斯多葛哲學與心理學金句中抽出一張。每一張都標明作者與出處。" }),
  },
  {
    title: translate({ id: "homepage.how.step3.title", message: "翻面細讀" }),
    body: translate({ id: "homepage.how.step3.body", message: "點擊卡片看背面的白話解說，把一句古老的話，對回你現在的處境。" }),
  },
];

function HowItWorks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          id="how"
          eyebrow={translate({ id: "homepage.how.eyebrow", message: "使用方式" })}
          title={translate({ id: "homepage.how.title", message: "三個步驟，換一個角度" })}
        />
        <ol className={styles.steps}>
          {getSteps().map((step, idx) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepIndex}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const getThemes = (): { icon: IconName; name: string; desc: string }[] => [
  {
    icon: "waves",
    name: translate({ id: "homepage.themes.anxiety.name", message: "焦慮不安" }),
    desc: translate({ id: "homepage.themes.anxiety.desc", message: "心神不寧、對未來過度擔憂" }),
  },
  {
    icon: "flame",
    name: translate({ id: "homepage.themes.anger.name", message: "憤怒與衝突" }),
    desc: translate({ id: "homepage.themes.anger.desc", message: "被激怒、與人起摩擦" }),
  },
  {
    icon: "hourglass",
    name: translate({ id: "homepage.themes.procrastination.name", message: "拖延與行動" }),
    desc: translate({ id: "homepage.themes.procrastination.desc", message: "知道該做卻動不了" }),
  },
  {
    icon: "rain",
    name: translate({ id: "homepage.themes.loss.name", message: "失落與挫敗" }),
    desc: translate({ id: "homepage.themes.loss.desc", message: "失敗、被拒絕、失去" }),
  },
  {
    icon: "split",
    name: translate({ id: "homepage.themes.decision.name", message: "抉擇與迷惘" }),
    desc: translate({ id: "homepage.themes.decision.desc", message: "不知道該選哪條路" }),
  },
  {
    icon: "users",
    name: translate({ id: "homepage.themes.relationship.name", message: "人際關係" }),
    desc: translate({ id: "homepage.themes.relationship.desc", message: "期待落空、界線、比較心" }),
  },
  {
    icon: "question",
    name: translate({ id: "homepage.themes.selfdoubt.name", message: "自我懷疑" }),
    desc: translate({ id: "homepage.themes.selfdoubt.desc", message: "覺得自己不夠好" }),
  },
  {
    icon: "wind",
    name: translate({ id: "homepage.themes.impermanence.name", message: "放下與無常" }),
    desc: translate({ id: "homepage.themes.impermanence.desc", message: "執著於無法改變的事" }),
  },
  {
    icon: "shuffle",
    name: translate({ id: "homepage.themes.serendipity.name", message: "隨緣" }),
    desc: translate({ id: "homepage.themes.serendipity.desc", message: "沒有特定困擾，看看今天遇到什麼" }),
  },
];

function Themes(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader
          id="themes"
          eyebrow={translate({ id: "homepage.themes.eyebrow", message: "抽卡主題" })}
          title={translate({ id: "homepage.themes.title", message: "從你此刻的困擾開始" })}
          lead={translate({ id: "homepage.themes.lead", message: "同一句話可以回應不同的處境。每個主題至少收錄 15 則金句，任何時候都抽得到卡。" })}
        />
        <ul className={styles.themeGrid}>
          {getThemes().map((t) => (
            <li key={t.name} className={styles.themeItem}>
              <Icon name={t.icon} size={22} className={styles.themeIcon} />
              <div>
                <h3 className={styles.themeName}>{t.name}</h3>
                <p className={styles.themeDesc}>{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const getSamples = () => [
  {
    school: translate({ id: "homepage.samples.zen.school", message: "禪語" }),
    text: translate({ id: "homepage.samples.zen.text", message: "平常心是道。" }),
    author: translate({ id: "homepage.samples.zen.author", message: "南泉普願" }),
    source: translate({ id: "homepage.samples.zen.source", message: "無門關 第十九則" }),
  },
  {
    school: translate({ id: "homepage.samples.stoic.school", message: "斯多葛" }),
    text: translate({ id: "homepage.samples.stoic.text", message: "困擾人們的不是事情本身，而是他們對事情的看法。" }),
    author: translate({ id: "homepage.samples.stoic.author", message: "愛比克泰德" }),
    source: translate({ id: "homepage.samples.stoic.source", message: "手冊 5" }),
  },
  {
    school: translate({ id: "homepage.samples.psychology.school", message: "心理學" }),
    text: translate({ id: "homepage.samples.psychology.text", message: "弔詭的是，當我完全接受現在的自己，我才開始能夠改變。" }),
    author: translate({ id: "homepage.samples.psychology.author", message: "卡爾・羅哲斯" }),
    source: translate({ id: "homepage.samples.psychology.source", message: "成為一個人" }),
  },
];

function Schools(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow={translate({ id: "homepage.schools.eyebrow", message: "內容" })}
          title={translate({ id: "homepage.schools.title", message: "180 則金句，三種視角" })}
          lead={translate({ id: "homepage.schools.lead", message: "禪宗、斯多葛哲學與現代心理學各 60 則，取自公有領域典籍與可引用的短句。每張卡都附中英對照、作者、出處與白話解說。" })}
        />
        <div className={styles.sampleGrid}>
          {getSamples().map((s) => (
            <figure key={s.school} className={styles.sample}>
              <figcaption className={styles.sampleSchool}>
                {s.school}
              </figcaption>
              <blockquote className={styles.sampleText}>{s.text}</blockquote>
              <p className={styles.sampleMeta}>
                {s.author}
                <span>{s.source}</span>
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const getFeatures = (): { icon: IconName; title: string; body: string }[] => [
  {
    icon: "cards",
    title: translate({ id: "homepage.features.draw.title", message: "主題抽卡" }),
    body: translate({ id: "homepage.features.draw.body", message: "依困擾主題抽卡，不設每日次數，也不用等級鎖住內容。再次抽到看過的卡，會標示為「重逢」。" }),
  },
  {
    icon: "enso",
    title: translate({ id: "homepage.features.sit.title", message: "靜默禪修" }),
    body: translate({ id: "homepage.features.sit.body", message: "呼吸、數息、只管打坐三種練習，可選擇時長。沒有語音、沒有背景音樂，只有隨呼吸漲落的墨圈。" }),
  },
  {
    icon: "bookmark",
    title: translate({ id: "homepage.features.saved.title", message: "收藏" }),
    body: translate({ id: "homepage.features.saved.body", message: "有感覺的句子按下收藏，之後可依主題或流派篩選，也能用關鍵字搜尋金句與作者。" }),
  },
  {
    icon: "calendar",
    title: translate({ id: "homepage.features.progress.title", message: "紀錄" }),
    body: translate({ id: "homepage.features.progress.body", message: "月曆標記每天抽到的卡與禪修次數，並整理出這個月你最常為哪個主題抽卡。" }),
  },
  {
    icon: "texture",
    title: translate({ id: "homepage.features.cardStyles.title", message: "成長與卡面" }),
    body: translate({ id: "homepage.features.cardStyles.body", message: "抽卡、翻閱與收藏累積經驗值，升級解鎖宣紙、水墨、竹簡、泥金等八種卡面材質。" }),
  },
  {
    icon: "bell",
    title: translate({ id: "homepage.features.reminder.title", message: "每日提醒" }),
    body: translate({ id: "homepage.features.reminder.body", message: "選定時間與主題，每天收到一句金句通知，點開就是完整的卡片。" }),
  },
  {
    icon: "share",
    title: translate({ id: "homepage.features.share.title", message: "分享卡片" }),
    body: translate({ id: "homepage.features.share.body", message: "把喜歡的卡片轉成圖片，透過系統分享給朋友，或存進相簿。" }),
  },
  {
    icon: "languages",
    title: translate({ id: "homepage.features.bilingual.title", message: "中英雙語" }),
    body: translate({ id: "homepage.features.bilingual.body", message: "介面與金句內容皆提供繁體中文與英文，可隨時切換。" }),
  },
];

function Features(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader id="features" eyebrow={translate({ id: "homepage.features.eyebrow", message: "功能" })}
          title={translate({ id: "homepage.features.title", message: "抽卡之外" })} />
        <ul className={styles.featureGrid}>
          {getFeatures().map((f) => (
            <li key={f.title} className={styles.feature}>
              <Icon name={f.icon} size={24} className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureBody}>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const getPrinciples = () => [
  {
    title: translate({ id: "homepage.principles.noGate.title", message: "內容沒有門檻" }),
    body: translate({ id: "homepage.principles.noGate.body", message: "等級與經驗值只用來解鎖外觀，不會擋住任何一張卡。需要的時候，錦囊隨時打得開。" }),
  },
  {
    title: translate({ id: "homepage.principles.noScore.title", message: "禪修只記錄，不計分" }),
    body: translate({ id: "homepage.principles.noScore.body", message: "禪修不給經驗值，也不計算連續天數。安靜下來這件事，不該帶著「斷掉」的壓力。" }),
  },
  {
    title: translate({ id: "homepage.principles.localData.title", message: "資料留在你的手機" }),
    body: translate({ id: "homepage.principles.localData.body", message: "不需註冊帳號。收藏、紀錄與設定都只存在裝置上；首次下載內容後即可離線使用。" }),
  },
];

function Principles(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow={translate({ id: "homepage.principles.eyebrow", message: "設計原則" })}
          title={translate({ id: "homepage.principles.title", message: "我們刻意不做的事" })} />
        <div className={styles.principleGrid}>
          {getPrinciples().map((p) => (
            <div key={p.title} className={styles.principle}>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Platform = {
  icon: IconName;
  name: string;
  body: string;
  status: string;
  links?: { label: string; href: string; primary?: boolean }[];
};

function usePlatforms(): Platform[] {
  const appStore = useAppStoreLink();
  return [
    {
      icon: "smartphone",
      name: "StoaZen App",
      body: translate({
        id: "homepage.download.app.body",
        message: "完整的抽卡、禪修、收藏與紀錄功能，支援 iOS，Android 版即將推出。",
      }),
      status: translate({
        id: "homepage.download.app.status",
        message: "iOS 已上架・Android 即將上架",
      }),
      links: [
        {
          label: translate({
            id: "homepage.download.app.appStore",
            message: "App Store 下載",
          }),
          href: appStore,
          primary: true,
        },
      ],
    },
    {
      icon: "browser",
      name: translate({
        id: "homepage.download.browser.name",
        message: "瀏覽器擴充功能",
      }),
      body: translate({
        id: "homepage.download.browser.body",
        message: "在每天打開瀏覽器的時候，也能遇見一句金句。",
      }),
      status: translate({
        id: "homepage.download.browser.status",
        message: "即將推出",
      }),
    },
  ];
}

function Download(): ReactNode {
  const platforms = usePlatforms();
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader
          id="download"
          eyebrow={translate({ id: "homepage.download.eyebrow", message: "下載" })}
          title={translate({ id: "homepage.download.title", message: "在手機與瀏覽器上使用" })}
        />
        <div className={styles.platformGrid}>
          {platforms.map((p) => (
            <div key={p.name} className={styles.platform}>
              <Icon name={p.icon} size={28} className={styles.platformIcon} />
              <h3 className={styles.platformName}>{p.name}</h3>
              <p className={styles.platformBody}>{p.body}</p>
              {p.links && (
                <div className={styles.storeLinks}>
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className={l.primary ? styles.storeBtn : styles.storeBtnGhost}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
              <p className={styles.platformStatus}>{p.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.newsletter}>
          <SectionHeader
            id="newsletter"
            eyebrow={translate({ id: "homepage.newsletter.eyebrow", message: "電子報" })}
            title={translate({ id: "homepage.newsletter.title", message: "免費訂閱電子報" })}
            lead={translate({ id: "homepage.newsletter.lead", message: "留下你的電子郵件，收到 StoaZen 的新文章，以及 App 上架與更新的消息。隨時可以取消訂閱。" })}
          />
          <div className={styles.newsletterEmbed}>
            <iframe
              src="https://stoazen.substack.com/embed"
              title={translate({ id: "homepage.newsletter.iframeTitle", message: "訂閱 StoaZen 電子報" })}
              width="480"
              height="320"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <HowItWorks />
      <Themes />
      <Schools />
      <Features />
      <Principles />
      <Download />
      <Newsletter />
    </>
  );
}
