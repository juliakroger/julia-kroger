import { nataHouse, provaFacil, decentDevs, seedify } from "../assets";

export const careerStartYear = 2019;

const tplusLogo = "https://www.tplus.cx/assets/smileylogo1200x675.png";

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Prova Fácil",
    icon: provaFacil,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2019",
    summary:
      "Developed a React Native exam-scanning app that reduced manual work for teachers.",
    points: [
      "Developed a mobile application in React Native that automated the exam-scanning process for teachers, allowing tests to be scanned and linked directly to students.",
      "Used Bitbucket for version control and Jira with Agile methodology for project management.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "nata.house",
    icon: nataHouse,
    iconBg: "#E6DEDD",
    date: "May 2019 - Nov 2019",
    summary:
      "Contributed to end-to-end delivery of multiple client projects across frontend and backend stacks.",
    points: [
      "Contributed to the end-to-end delivery of multiple client projects across the frontend and backend stacks.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Decent Devs",
    icon: decentDevs,
    iconBg: "#F2F2F2",
    date: "Nov 2019 - Feb 2023",
    summary:
      "Built production dApps and internal Web3 systems, including automated crypto payroll and token-distribution tooling.",
    points: [
      "Built an automated crypto payroll system that calculated salaries, bonuses, and vacation pay, then executed staff payments in a single multi-signature transaction.",
      "Created a system for DeversiFi that monitored Twitter activity and automated token distribution to drive early fundraising engagement.",
      "Managed frontend development and wrote extensive Cypress E2E tests for a US crypto-tax platform, ensuring high data accuracy.",
    ],
  },
  {
    title: "Lead Frontend Engineer",
    company_name: "Seedify",
    icon: seedify,
    iconBg: "#46208B",
    date: "Feb 2023 - Jan 2026",
    summary:
      "Led frontend architecture and delivery for fundraising, staking, Solana claims, and wallet-delegation systems.",
    points: [
      "Drove the platform redesign for staking, farming, and Solana claims, including full-stack implementation of wallet delegation with Solana support.",
      "Led the frontend team for Seedify fundraising systems, including IDO and vesting V1-V3, the bonding-curve mechanism, smart-contract integrations, and cross-chain contracts.",
      "Improved real-time blockchain performance with Server-Sent Events, developed an internal SDK for secure API and smart-contract consumption, and automated IDO and vesting V3 contract generation.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Tplus.cx",
    icon: tplusLogo,
    iconBg: "#ff0000",
    date: "Jan 2026 - Present",
    summary: "Full-time · Remote",
    points: [],
  },
];
