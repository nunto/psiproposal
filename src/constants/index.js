import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  placeholder,
  plusSquare,
  protopie,
  psiBg,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  salesforce,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Products",
    url: "#products",
  },
  {
    id: "1",
    title: "Resources",
    url: "#resources",
  },
  {
    id: "3",
    title: "Integrations",
    url: "#integrations",
  },
  {
    id: "4",
    title: "Sign Up",
    url: "#signup",
    onlyMobile: true,
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Packing slip can be applied to top or side of your carton",
  "ROI typically in less than one year",
  "Processes orders faster than any current system available",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Salesforce",
    text: "Integration with Salesforce APIs. Allowing companies to simplify and optimize business management, enabling organizations of all sizes to boost their growth.",
    imageUrl: salesforce,
    status: "done",
    colorful: true,
  },
  {
    id: "1",
    title: "ROI Calculator",
    text: "Implement an ROI calculator, built in excel with the capabilities to allow user modifications.",
    date: "May 2023",
    imageUrl: placeholder,
    status: "progress",
   
  },
  {
    id: "2",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2023",
    imageUrl: placeholder,
    status: "done",
  },
  {
    id: "3",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2023",
    imageUrl: placeholder,
    status: "progress",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Case Study: 3PL",
    text: "Outsized ROI Achieved From Fulfillment Line Automation.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: psiBg,
  },
  {
    id: "1",
    title: "Case Study: E-Commerce",
    text: "Achieving the Perfect Order for a Beverage Company.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: psiBg,
    light: true,
  },
  {
    id: "2",
    title: "Case Study: Healthcare",
    text: "Beating Growing Pains for a Thriving Eyeglass Company.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: psiBg,
  },
  {
    id: "3",
    title: "Case Study: Pharmaceuticals",
    text: "Automating & Verifying Critical Packing Documents for a Medical Device Company.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: psiBg,
    light: true,
  },
  {
    id: "4",
    title: "Case Study: Retail",
    text: "No-Hassle Automation Increases Throughput to 600 Boxes per Hour.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: psiBg,
  },
  {
    id: "5",
    title: "Case Study: Manufacturing",
    text: "A Modular Solution Eliminates Conveyor Dead Zones.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: psiBg,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
