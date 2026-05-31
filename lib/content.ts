export const siteContent = {
  announcement: {
    text: "Open-source account abstraction for Stellar —",
    linkText: "View on GitHub",
    linkHref: "https://github.com/ancore-org/ancore",
  },
  nav: {
    logo: "Ancore",
    links: [
      { label: "Features", href: "#features" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Get Started", href: "#get-started" },
    ],
    cta: { label: "View on GitHub", href: "https://github.com/ancore-org/ancore" },
  },
  hero: {
    badge: "Open Source · Stellar / Soroban",
    headline: "Account abstraction for the Stellar network",
    subhead:
      "Ancore is an open-source account abstraction and financial UX layer for Stellar. Smart accounts, session keys, social recovery, and native invoicing — built for developers and end users alike.",
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/ancore-org/ancore",
    },
    secondaryCta: { label: "Explore features", href: "#features" },
    image: "/images/hero.jpg",
    imageAlt: "Earth from space with network connections",
  },
  services: {
    id: "features",
    headline: "What Ancore enables",
    subhead:
      "Advanced account abstraction capabilities on Stellar/Soroban — programmable accounts, seamless UX, and financial primitives out of the box.",
    items: [
      {
        title: "Smart Accounts",
        description:
          "Programmable accounts with custom validation logic. Define how transactions are authorized, enforced on-chain via Soroban smart contracts.",
      },
      {
        title: "Session Keys",
        description:
          "Secure, time-limited signing permissions for seamless UX. Let users interact with dApps without approving every action with their root key.",
      },
      {
        title: "Social Recovery",
        description:
          "Decentralized account recovery without seed phrases. Guardians and policy-based recovery flows keep accounts accessible and secure.",
      },
      {
        title: "Multi-Signature",
        description:
          "Flexible approval policies for teams and organizations. Configure thresholds, roles, and spending limits that match how you operate.",
      },
      {
        title: "Invoice System",
        description:
          "Native request-to-pay functionality with QR codes. Send, receive, and settle payment requests directly on the Stellar network.",
      },
      {
        title: "AI Agent Integration",
        description:
          "Natural language financial operations. Orchestrate payments, queries, and account actions through conversational interfaces.",
      },
    ],
  },
  process: {
    id: "ecosystem",
    headline: "A complete monorepo",
    subhead:
      "Everything you need to build, deploy, and operate account-abstraction-powered applications on Stellar.",
    steps: [
      {
        number: "01",
        title: "Apps",
        description:
          "User-facing applications including a browser extension wallet, React Native mobile app, and web dashboard for account management.",
      },
      {
        number: "02",
        title: "Packages & SDK",
        description:
          "Public SDKs and libraries — core-sdk, account-abstraction primitives, Stellar/Soroban utilities, crypto helpers, and a shared UI kit.",
      },
      {
        number: "03",
        title: "Contracts & Services",
        description:
          "Soroban smart contracts for accounts, validation modules, and invoicing — plus optional relayer, indexer, and AI agent infrastructure.",
      },
    ],
  },
  highlight: {
    headline: "Built for security and scale",
    description:
      "Ancore maintains strict security boundaries across the monorepo. Core contracts and cryptographic packages require team approval; apps, UI kit, and docs welcome community contributions.",
    points: [
      "Audited contract architecture with pluggable validation modules",
      "Relayer and indexer services for production deployments",
      "TypeScript SDK with full account-abstraction primitives",
    ],
  },
  cta: {
    id: "get-started",
    headline: "Start building on Stellar",
    subhead:
      "Clone the monorepo, install dependencies with pnpm, and deploy your first smart account with the Ancore SDK.",
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/ancore-org/ancore",
    },
    secondaryCta: { label: "Explore features", href: "#features" },
  },
  footer: {
    tagline:
      "Open-source account abstraction and financial UX for the Stellar network.",
    columns: [
      {
        title: "Features",
        links: [
          { label: "Smart Accounts", href: "#features" },
          { label: "Session Keys", href: "#features" },
          { label: "Social Recovery", href: "#features" },
          { label: "Invoice System", href: "#features" },
        ],
      },
      {
        title: "Developers",
        links: [
          { label: "Ecosystem", href: "#ecosystem" },
          { label: "Get Started", href: "#get-started" },
          {
            label: "GitHub",
            href: "https://github.com/ancore-org/ancore",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "Architecture docs",
            href: "https://github.com/ancore-org/ancore/tree/main/docs/architecture",
          },
          {
            label: "Security model",
            href: "https://github.com/ancore-org/ancore/tree/main/docs/security",
          },
          {
            label: "User guide",
            href: "https://github.com/ancore-org/ancore/tree/main/docs/user-guide",
          },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Ancore. Open source under project license.`,
  },
} as const;
