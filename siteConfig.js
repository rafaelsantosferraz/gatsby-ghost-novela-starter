module.exports = {
  siteUrl: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/welcome",
  postsPerPage: 12,
  siteTitleMeta: "Lex Blog",
  siteDescriptionMeta:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "Lex Blog",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://lex-blog.herokuapp.com",
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/",
      },
      {
        label: "Contact",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/contact",
      },
    ],
  },
  footer: {
    copyright: "Built with Draftbox",
    navigation: [
      {
        label: "Home",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/",
      },
      {
        label: "Sitemap",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/rss.xml",
      },
      {
        label: "Contact",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/contact",
      },
      {
        label: "External Link",
        url: "https://gatsbyghostnovelastarter93915.gatsbyjs.io/themes?tab=posts",
      },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Built with Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Built with Draftbox.",
  },
  socialLinks: {
    twitter: "https://twitter.com/draftboxhq",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com",
    github: "https://github.com/draftbox-co",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
  },
  twitterCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "Built with Draftbox",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
