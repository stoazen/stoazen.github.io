import type { ReactNode } from "react";
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

const steps = [
  {
    title: "說出困擾",
    body: "從八個生活主題中，選出此刻最貼近你的那一個。沒有特定煩惱時，就選「隨緣」。",
  },
  {
    title: "抽一張卡",
    body: "從對應的禪語、斯多葛哲學與心理學金句中抽出一張。每一張都標明作者與出處。",
  },
  {
    title: "翻面細讀",
    body: "點擊卡片看背面的白話解說，把一句古老的話，對回你現在的處境。",
  },
];

function HowItWorks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          id="how"
          eyebrow="使用方式"
          title="三個步驟，換一個角度"
        />
        <ol className={styles.steps}>
          {steps.map((step, idx) => (
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

const themes: { icon: IconName; name: string; desc: string }[] = [
  { icon: "waves", name: "焦慮不安", desc: "心神不寧、對未來過度擔憂" },
  { icon: "flame", name: "憤怒與衝突", desc: "被激怒、與人起摩擦" },
  { icon: "hourglass", name: "拖延與行動", desc: "知道該做卻動不了" },
  { icon: "rain", name: "失落與挫敗", desc: "失敗、被拒絕、失去" },
  { icon: "split", name: "抉擇與迷惘", desc: "不知道該選哪條路" },
  { icon: "users", name: "人際關係", desc: "期待落空、界線、比較心" },
  { icon: "question", name: "自我懷疑", desc: "覺得自己不夠好" },
  { icon: "wind", name: "放下與無常", desc: "執著於無法改變的事" },
  { icon: "shuffle", name: "隨緣", desc: "沒有特定困擾，看看今天遇到什麼" },
];

function Themes(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader
          id="themes"
          eyebrow="抽卡主題"
          title="從你此刻的困擾開始"
          lead="同一句話可以回應不同的處境。每個主題至少收錄 15 則金句，任何時候都抽得到卡。"
        />
        <ul className={styles.themeGrid}>
          {themes.map((t) => (
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

const samples = [
  {
    school: "禪語",
    text: "平常心是道。",
    author: "南泉普願",
    source: "無門關 第十九則",
  },
  {
    school: "斯多葛",
    text: "困擾人們的不是事情本身，而是他們對事情的看法。",
    author: "愛比克泰德",
    source: "手冊 5",
  },
  {
    school: "心理學",
    text: "弔詭的是，當我完全接受現在的自己，我才開始能夠改變。",
    author: "卡爾・羅哲斯",
    source: "成為一個人",
  },
];

function Schools(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="內容"
          title="180 則金句，三種視角"
          lead="禪宗、斯多葛哲學與現代心理學各 60 則，取自公有領域典籍與可引用的短句。每張卡都附中英對照、作者、出處與白話解說。"
        />
        <div className={styles.sampleGrid}>
          {samples.map((s) => (
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

const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "cards",
    title: "主題抽卡",
    body: "依困擾主題抽卡，不設每日次數，也不用等級鎖住內容。再次抽到看過的卡，會標示為「重逢」。",
  },
  {
    icon: "enso",
    title: "靜默禪修",
    body: "呼吸、數息、只管打坐三種練習，可選擇時長。沒有語音、沒有背景音樂，只有隨呼吸漲落的墨圈。",
  },
  {
    icon: "bookmark",
    title: "收藏",
    body: "有感覺的句子按下收藏，之後可依主題或流派篩選，也能用關鍵字搜尋金句與作者。",
  },
  {
    icon: "calendar",
    title: "紀錄",
    body: "月曆標記每天抽到的卡與禪修次數，並整理出這個月你最常為哪個主題抽卡。",
  },
  {
    icon: "texture",
    title: "成長與卡面",
    body: "抽卡、翻閱與收藏累積經驗值，升級解鎖宣紙、水墨、竹簡、泥金等八種卡面材質。",
  },
  {
    icon: "bell",
    title: "每日提醒",
    body: "選定時間與主題，每天收到一句金句通知，點開就是完整的卡片。",
  },
  {
    icon: "share",
    title: "分享卡片",
    body: "把喜歡的卡片轉成圖片，透過系統分享給朋友，或存進相簿。",
  },
  {
    icon: "languages",
    title: "中英雙語",
    body: "介面與金句內容皆提供繁體中文與英文，可隨時切換。",
  },
];

function Features(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader id="features" eyebrow="功能" title="抽卡之外" />
        <ul className={styles.featureGrid}>
          {features.map((f) => (
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

const principles = [
  {
    title: "內容沒有門檻",
    body: "等級與經驗值只用來解鎖外觀，不會擋住任何一張卡。需要的時候，錦囊隨時打得開。",
  },
  {
    title: "禪修只記錄，不計分",
    body: "禪修不給經驗值，也不計算連續天數。安靜下來這件事，不該帶著「斷掉」的壓力。",
  },
  {
    title: "資料留在你的手機",
    body: "不需註冊帳號。收藏、紀錄與設定都只存在裝置上；首次下載內容後即可離線使用。",
  },
];

function Principles(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="設計原則" title="我們刻意不做的事" />
        <div className={styles.principleGrid}>
          {principles.map((p) => (
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

const platforms: {
  icon: IconName;
  name: string;
  body: string;
  status: string;
}[] = [
  {
    icon: "smartphone",
    name: "StoaZen App",
    body: "完整的抽卡、禪修、收藏與紀錄功能，支援 iOS 與 Android。",
    status: "App Store・Google Play 即將上架",
  },
  {
    icon: "browser",
    name: "瀏覽器擴充功能",
    body: "在每天打開瀏覽器的時候，也能遇見一句金句。",
    status: "即將推出",
  },
];

function Download(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader
          id="download"
          eyebrow="下載"
          title="在手機與瀏覽器上使用"
        />
        <div className={styles.platformGrid}>
          {platforms.map((p) => (
            <div key={p.name} className={styles.platform}>
              <Icon name={p.icon} size={28} className={styles.platformIcon} />
              <h3 className={styles.platformName}>{p.name}</h3>
              <p className={styles.platformBody}>{p.body}</p>
              <p className={styles.platformStatus}>{p.status}</p>
            </div>
          ))}
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
    </>
  );
}
