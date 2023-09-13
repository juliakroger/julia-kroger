import {
  sequence,
  niji,
  cryptoList,
  seedifyProject,
  stockhaus,
  cocabana,
} from "../assets";

export const projects = [
  {
    name: "Seedify",
    url: "https://seedify.fund/",
    date: "Working on it since Feb, 2023",
    description:
      "Incubator and Launchpad for Web3 projects focused on technologies such as DeFi, AI, Big Data, NFTs and Web3 Gaming.",
    tags: ["Next.js", "Web3", "SASS", "Node.js", "Express", "AWS", "MongoDB"],
    image: seedifyProject,
  },
  {
    name: "Cocabana",
    url: "https://cabana-identity-alpha.netlify.app",
    date: "Published on Apr 19, 2022",
    description:
      "Company platform for Web3 Operations with operations for HR, payment processing, hour tracking, and contract execution through Web3 integration.",
    tags: ["React", "Web3", "Tailwind"],
    image: cocabana,
  },
  {
    name: "Niji Neuro (MVP)",
    url: "https://neuro-mvp.netlify.app/",
    description:
      "Game to science field with practical and actionable technologies in support of clinical research and therapeutic clinical trials, as well as in the promotion of brain health.",
    tags: ["React", "Vite", "Tailwind", "Recharts"],
    date: "Published on Sep, 2021",
    image: niji,
    source_code_link: "https://github.com/juliakroger/neuro-app",
  },
  {
    name: "Stockhaus",
    url: "https://stockhaus.app/",
    date: "Published on Jul, 2021",
    description:
      "Consumer goods distributor focused on bringing wholesale pricing for everyday essential products with cost savings to members.",
    tags: ["React", "SASS", "Firebase"],
    image: stockhaus,
  },
  {
    name: "Sequence",
    url: "https://sequence-horizon.netlify.app/",
    description:
      "Single Page Web application for Sequence (modular web3 stack and smart wallet for Ethereum chains) with basic information about the company and respective links.",
    date: "Published on Jun, 2021",
    tags: ["React", "SASS"],
    image: sequence,
    source_code_link: "https://github.com/juliakroger/sequence-horizon",
  },
  {
    name: "Crypto List Portfolio",
    url: "https://crypto-list.netlify.app/",
    date: "Published on Jan 27, 2022",
    description:
      "Project with live prices of the main cryptocurrencies, charts, market capitalization, and trading volume.",
    tags: ["React", "Web3"],
    image: cryptoList,
  },
];
