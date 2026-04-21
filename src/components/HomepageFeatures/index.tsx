import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "哲學智慧根基",
    icon: "📜",
    description: (
      <>
        整合斯多葛哲學、心理學、禪宗的精要智慧，幫助你建立清晰的人生觀與內在秩序。
      </>
    ),
  },
  {
    title: "正念生活實踐",
    icon: "🧘",
    description: (
      <>
        透過感恩日記與正念冥想工具，每日練習感謝與覺察，讓心靈在忙碌生活中找到安頓之所。
      </>
    ),
  },
  {
    title: "療癒身心音樂",
    icon: "🎵",
    description: (
      <>
        精選白噪音與頌缽音樂，隨時進入深度放鬆狀態，讓聲音成為你通往內心平靜的橋樑。
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

type ShowcaseItem = {
  gradient: string;
  placeholderIcon: string;
  title: string;
  description: string;
};

function ProductShowcase(): ReactNode {
  const features: ShowcaseItem[] = [
    {
      gradient:
        "linear-gradient(160deg, #1c1508 0%, #2a1e0a 60%, #341f08 100%)",
      placeholderIcon: "✏️",
      title: "感恩日記工具",
      description:
        "每日記錄三件令你感恩的事物，書寫內心感受與成長軌跡。斯多葛式引導提示幫助你聚焦於所能掌控之事，逐步培養穩定的正向心態，讓感謝成為一種生命習慣。",
    },
    {
      gradient:
        "linear-gradient(160deg, #0c1018 0%, #101520 60%, #0e1828 100%)",
      placeholderIcon: "🧘",
      title: "正念冥想工具",
      description:
        "引導式冥想與呼吸練習，幫助你將注意力帶回當下這一刻。從 1 分鐘的微冥想到 20 分鐘的深度禪修打坐，適合各種生活節奏。每一次練習，都是一次與自己的相遇。",
    },
    {
      gradient:
        "linear-gradient(160deg, #0c1410 0%, #0e1a12 60%, #101e14 100%)",
      placeholderIcon: "🎧",
      title: "白噪音・頌缽音樂播放器",
      description:
        "精心策展的白噪音與頌缽音樂庫，封閉外界喧囂，引導你進入深度專注或放鬆狀態。大自然雨聲、篝火柴燒到古老頌缽山水，每一道音景都是一次內心的回歸。",
    },
    {
      gradient:
        "linear-gradient(160deg, #1a1208 0%, #241808 60%, #2e1e08 100%)",
      placeholderIcon: "✨",
      title: "智慧之語抽卡",
      description:
        "每日抽取一張哲學智慧卡，涵蓋馬可奧理略、愛比克泰德、阿德勒、榮格與禪宗等智慧之語。讓一句話成為當日的內省起點，在日常的細縫中播下深刻的思想種子。",
    },
    {
      gradient:
        "linear-gradient(160deg, #141210 0%, #1a1610 60%, #1e1a12 100%)",
      placeholderIcon: "💖",
      title: "收藏我的最愛",
      description:
        "將觸動你的智慧卡片等內容收藏至個人空間，隨時回顧、深化內化。建立屬於你的心靈知識庫，讓每一個震動你的瞬間都能被珍藏。",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">工具功能</span>
          <Heading as="h2">五大核心功能，幫助你活好這一生</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse,
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <div
                className={styles.showcasePlaceholder}
                style={{ background: feature.gradient }}
              >
                {feature.placeholderIcon}
              </div>
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心優勢</span>
            <Heading as="h2">什麼是 StoaZen 斯多禪？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
