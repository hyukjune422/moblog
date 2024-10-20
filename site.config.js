const CONFIG = {
  // profile setting (required)
  profile: {
    name: "kwondoll",
    image: "/avatar1.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Web3 Master",
    bio: "Web3 유용한 정보를 제공합니다.",
    email: "hgwon0422@gmail.com",
    linkedin: "돌-권-648253208",
    github: "hyukjune422",
    instagram: "",
  },
  projects: [
    {
      name: `권돌 유튜브`,
      href: "https://www.youtube.com/@%EA%B6%8C%EB%8F%8C?sub_confirmation=1",
    },
    {
      name: `권돌 텔레그램`,
      href: "https://t.me/kwondoll_2",  
    }
  ],
  // blog setting (required)
  blog: {
    title: "권돌의 정보방",
    description: "권돌의 정보방에 오신 것을 환영합니다!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://kwondoll.kro.kr",
  since: 2020, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://kwondolllfg-ak3nk386q-kwondolls-projects.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 kwondoll",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "9368b794-9b9e-4020-9c80-4a5f03953fa3", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60 * 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
