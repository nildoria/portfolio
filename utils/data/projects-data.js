export const projectsData = [
  {
    id: 1,
    name: 'Pinbox — Shared Inbox for Teams',
    description:
      "A multi-tenant shared inbox built on the Gmail API. Workspaces with per-teammate assignment and read state, conversations threaded from parsed MIME, scheduled sends, and a contentEditable composer sanitised with DOMPurify. Gmail push notifications arrive through Cloud Pub/Sub webhooks with OIDC verification, while background workers handle watch renewal and reconciliation. Every database read and write is governed by Postgres Row-Level Security.",
    tools: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Node.js',
      'Express',
      'Gmail API',
      'OAuth 2.0',
      'PostgreSQL',
      'Supabase',
      'Cloudflare Pages',
      'Fly.io',
    ],
    role: 'Full-Stack Product Engineer',
    code: '',
    demo: 'https://pinbox.pages.dev/',
  },
  {
    id: 2,
    name: 'AllAround — Branded Merchandise Catalog',
    description:
      "A right-to-left Hebrew catalog where visitors upload a logo once and immediately preview it composited across 61 products. Category filtering, per-unit and bulk pricing, and an ordering flow that carries the uploaded artwork through to fulfilment. Built RTL-first rather than mirrored after the fact, with accessibility provisions for the Israeli market.",
    tools: [
      'JavaScript',
      'RTL layout',
      'Responsive design',
      'Image compositing',
      'Accessibility',
      'E-commerce',
    ],
    role: 'Frontend Engineer',
    code: '',
    demo: 'https://catalog.allaround.co.il/',
  },
  {
    id: 3,
    name: 'Custom WordPress Plugin Development',
    description:
      "Built a fully custom WordPress plugin with organized architecture including Elementor widget registration, admin settings pages, frontend asset enqueueing, AJAX functionality, and WooCommerce integration. The plugin includes affiliate system logic, header/footer display controls, and a custom dashboard with API-based integrations.",
    tools: ['WordPress', 'PHP', 'Elementor', 'WooCommerce', 'AJAX', 'JavaScript', 'MySQL'],
    role: 'WordPress Plugin Developer',
    code: '',
    demo: '',
  },
  {
    id: 4,
    name: 'WooCommerce Store Customization',
    description:
      "Customized a WooCommerce store with tailored product archive pages, single product layouts, cart and checkout page redesigns, custom order statuses, packing slip and invoice customization, affiliate product display, and AJAX cart updates. Implemented custom pricing, subscription display adjustments, and product limit logic.",
    tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS3', 'AJAX', 'HTML5'],
    role: 'WooCommerce Developer',
    code: '',
    demo: '',
  },
  {
    id: 5,
    name: 'GSAP & Elementor Animation Sections',
    description:
      "Developed modern interactive animation sections for Elementor-based websites using GSAP and ScrollTrigger. Implemented horizontal scroll sections, pinned scroll sections, image reveal animations, SVG draw animations, text animations, marquee sliders, hover animations, and accordion card animations. Built reusable Elementor-compatible animation widgets.",
    tools: ['GSAP', 'ScrollTrigger', 'JavaScript', 'Elementor', 'WordPress', 'CSS3', 'HTML5'],
    role: 'Frontend Animation Developer',
    code: '',
    demo: '',
  },
  {
    id: 6,
    name: 'Website Automation & API Integration',
    description:
      "Connected client websites with third-party services including Make.com automation workflows, Zapier integrations, Slack notification setup, Calendly booking integration, Supabase edge functions, AI chatbot integration, Google Forms and Sheets workflows, and CRM lead submission flows. Also handled REST API and webhook integrations for external services.",
    tools: ['Make.com', 'Zapier', 'REST API', 'Webhooks', 'Slack', 'Calendly', 'Supabase', 'PHP', 'WordPress'],
    role: 'Automation & Integration Developer',
    code: '',
    demo: '',
  },
];
