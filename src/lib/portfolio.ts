export const profile = {
	name: 'Gabriel Ivan Setyaputra',
	linkedin: 'https://www.linkedin.com/in/ivansetya/',
	github: 'https://github.com/ivanerror',
	location: 'Jakarta, Indonesia'
};

export type Project = {
	number: string;
	name: string;
	company: string;
	year: string;
	category: string;
	description: string;
	tags: string[];
	outcome: string;
	outcomeLabel: string;
	context: string;
	contributions: string[];
	variant: 'grid' | 'mobile' | 'pos';
};

export const projects: Project[] = [
	{
		number: '01',
		name: 'A foundation for\nbetter investment decisions.',
		company: 'RADSoft · PreTrade',
		year: 'DEC 2025 — PRESENT',
		category: 'FRONTEND ARCHITECTURE',
		description:
			'From a blank canvas to a modular investment platform. An extensible workspace for complex financial workflows.',
		tags: ['React', 'TypeScript', 'Zustand'],
		outcome: 'Built from zero.',
		outcomeLabel: 'ARCHITECTURE → PRODUCTION',
		variant: 'grid',
		context:
			'PreTrade brings portfolio management, trading, fund monitoring, and investment operations into one configurable dashboard. I built its frontend foundation from scratch and now lead its technical direction as Software Engineering Supervisor.',
		contributions: [
			'Architected the frontend foundation: project structure, design system, state management, and app framework.',
			'Built a custom grid rendering engine with draggable, resizable, persistent widgets using React Grid Layout and Zustand.',
			'Introduced a Registry Pattern architecture so new dashboard modules onboard with minimal effort.',
			'Delivered Portfolio Grouping, Super Chart, Order List, Fund Position, Pre/Post-Trade Monitoring, Rebalance, Bulk Order, and Deposito Maturity Management.',
			'Directed integration with Blackbird, the core backend: workspace persistence, order simulation, fund positions, and API orchestration.',
			'Drive architecture design, code reviews, and Docker / GitHub Actions delivery pipelines for the team.'
		]
	},
	{
		number: '02',
		name: 'Private conversations.\nProvable by design.',
		company: 'RADSoft · ChatHub',
		year: 'APR 2026 — PRESENT',
		category: 'BACKEND & SECURITY',
		description:
			'A multi-tenant realtime chat service for financial-services clients, including Allianz Life and Mandiri FA.',
		tags: ['.NET 10', 'gRPC', 'WebSocket', 'PostgreSQL', 'Redis'],
		outcome: 'Audit-ready.',
		outcomeLabel: 'HASH-CHAINED LOG, VERIFIED DAILY',
		variant: 'grid',
		context:
			'Financial clients needed realtime messaging they could trust and audit. I co-built ChatHub from the ground up, from service boundaries to production deployment.',
		contributions: [
			'Co-built the pairing API, WebSocket gateway, and background worker, communicating over gRPC.',
			'Secured messaging with OpenBao-wrapped room keys and key rotation, ES256 tenant-signed tokens, and a hash-chained audit log with daily verification.',
			'Built admin offboarding tooling (void admin, password and TOTP reset) with audit logging and integration tests.',
			'Shipped the production deployment (Docker Compose, Caddy, backup scripts) and GitHub Actions publish / rollback pipelines.'
		]
	},
	{
		number: '03',
		name: 'Paperwork, signed\nand sealed in the browser.',
		company: 'Hermes E-Office',
		year: 'SEP 2025 — PRESENT',
		category: 'FULL-STACK PRODUCT',
		description:
			'A multi-tenant e-office platform for Indonesian organisations, from drafting a letter to a verifiable final PDF.',
		tags: ['SvelteKit', 'Bun', 'Elysia', 'PostgreSQL', 'Flutter'],
		outcome: '~87%',
		outcomeLabel: 'OF 200+ COMMITS AS LEAD DEVELOPER',
		variant: 'grid',
		context:
			'Hermes replaces paper-based correspondence for organisations with real approval hierarchies. As lead developer, I own it end to end across web, mobile, data, and deployment.',
		contributions: [
			'Built the end-to-end letter workflow: DOCX templates, in-browser ONLYOFFICE editing with immutable revisions, layered approval routes following the org position tree, and tamper-evident PDFs with QR verification stamps.',
			'Designed the multi-tenant PostgreSQL schema (62 tables) with forced Row-Level Security, plus a CI job that applies every migration to a real database.',
			'Developed the inbox and disposition module, audit trail, per-tenant RBAC, and an email worker with safe retries and bounce tracking.',
			'Built the Flutter mobile app with Play Integrity–attested sign-in and Firebase push notifications.',
			'Set up CI/CD, versioned releases, and per-client deployments, backed by 92 unit, integration, and Playwright e2e test files.'
		]
	},
	{
		number: '04',
		name: 'Project management\nthat talks back.',
		company: 'Poru',
		year: 'SEP 2025 — PRESENT',
		category: 'AI PRODUCT ENGINEERING',
		description:
			'An AI-powered ticketing and project management platform, with agents that can search, plan, and report.',
		tags: ['Next.js 16', 'LangGraph', 'Supabase', 'pgvector'],
		outcome: '~93%',
		outcomeLabel: 'OF 500+ COMMITS AS LEAD DEVELOPER',
		variant: 'grid',
		context:
			'Poru grew from a ticketing tool into a platform with 47 pages, 58 API routes, and 65 migrations. I lead its development and its AI integration.',
		contributions: [
			'Built an agentic AI chat on LangGraph with tool calling and generative UI.',
			'Built hybrid ticket search (pgvector + full-text + reciprocal rank fusion), kept fresh by an embedding queue.',
			'Built Temporal Loom: a WBS tree with drag-and-drop, progress rollup, daily snapshots, S-curve reports, Excel export, and Google Sheets sync.',
			'Built an MCP server exposing tickets and project data to AI agents over OAuth, plus two-way Freedcamp sync via an idempotent job queue.',
			'Covered the platform with 129 Vitest unit-test files.'
		]
	},
	{
		number: '05',
		name: 'Small interactions.\nMeaningful merchant impact.',
		company: 'Grab · Mex app',
		year: '2024 — 2025',
		category: 'MOBILE ENGINEERING',
		description:
			'Making everyday business easier through clearer insights, thoughtful feedback flows, and a redesigned home.',
		tags: ['Flutter', 'Dart', 'SDUI'],
		outcome: '79% → 91%',
		outcomeLabel: 'POSITIVE FEEDBACK RESPONSE RATE',
		variant: 'mobile',
		context:
			'On the Mex app, I worked with cross-functional teams on experiences used by merchants across Southeast Asia.',
		contributions: [
			'Engineered the Mex feedback flow: positive responses rose from 79% to 91%, and engagement from 11.5% to 29.4%.',
			'Delivered Meal For One (M41) Insights Phase 1, a Top 40 project at Grab.',
			'Built the SDUI-driven Homescreen Redesign, plus Insights Benchmark and Cashier Ops Insights.',
			'Built a web LottiePlayer for Insights Reels and embedded the Mex AI Assistant via WebView, cutting server load.'
		]
	},
	{
		number: '06',
		name: 'Less friction.\nMore business as usual.',
		company: 'Grab · POS & Onboarding',
		year: '2022 — 2024',
		category: 'WEB & FLUTTER ENGINEERING',
		description:
			'Reliable tools for the people behind the counter, and a smoother path for merchants getting started.',
		tags: ['React', 'Flutter', 'Design systems'],
		outcome: '53%+',
		outcomeLabel: 'REDUCTION IN SUPPORT TICKETS',
		variant: 'pos',
		context:
			'Across the POS ecosystem and merchant onboarding, I built consistent interfaces and tools that kept merchants operating.',
		contributions: [
			'Contributed to a diagnostic tool that cut support tickets by over 53%.',
			'Led the POS design system and the Flutter 3.3.10 upgrade for a consistent UI across the app.',
			'Enhanced dynamic translation in the OCR document QualityCheck flow, saving an estimated 900 man-hours per month.',
			'Built Progressive Onboarding UI components covering 80% of workflows, with a shared base for country-specific variants.',
			'Built the CMS side of the GrabLink payment subscription integration for Hubbo POS, plus a lead-gen page with Salesforce tracking.'
		]
	},
	{
		number: '07',
		name: 'Four players.\nOne jade table.',
		company: 'Side project · Majong 3D',
		year: 'OCT 2026',
		category: 'REALTIME 3D GAME',
		description: 'Multiplayer 3D Mahjong in the browser, with full rules, bots, and a 3D tutorial.',
		tags: ['React Three Fiber', 'Colyseus', 'Node.js', 'Blender'],
		outcome: '4-player',
		outcomeLabel: 'SERVER-AUTHORITATIVE MULTIPLAYER',
		variant: 'grid',
		context:
			'A full Mahjong game that runs in a browser tab, from game server to procedurally generated tiles.',
		contributions: [
			'Built a server-authoritative game on Colyseus: chow / pong / kong, flowers, a 10-second claim window with priority resolution, and reconnect via seat reclaim.',
			'Built the 3D table with React Three Fiber: procedurally generated tiles with custom jade shaders, deal animations, and quality tiers for mobile.',
			'Added rule-based bots with five play styles, an interactive 3D tutorial, and a headless Blender pipeline for rigged, animated avatars.',
			'Shipped as a PWA on Coolify (Docker), with per-second game snapshots restored after restarts.'
		]
	},
	{
		number: '08',
		name: 'From Tkinter\nto a 4 MB installer.',
		company: 'Open source · StreamQ',
		year: 'MIT LICENSE',
		category: 'DESKTOP APP',
		description:
			'A cross-platform YouTube download manager for queued 4K video and 320 kbps MP3, with parallel jobs and pause / resume.',
		tags: ['Rust', 'Tauri 2', 'React 19', 'yt-dlp'],
		outcome: '~4 MB',
		outcomeLabel: 'INSTALLERS FOR WINDOWS, MACOS, LINUX',
		variant: 'grid',
		context:
			'StreamQ started as a Python / Tkinter tool. I led an AI-assisted rewrite to Tauri 2. Source: github.com/ivanerror/streamq',
		contributions: [
			'Moved the download engine, scheduler, and persistence into a Rust core, with a React UI.',
			'Shipped ~4 MB installers via GitHub Actions; tools are fetched on first launch with SHA-256 verification.',
			'Integration tests run on all three operating systems.'
		]
	},
	{
		number: '09',
		name: 'The cards are real.\nThe reading is live.',
		company: 'Side project · 3D AI Tarot Reader',
		year: 'OCT 2026',
		category: 'WEBGL & AI',
		description:
			'A mobile-first 3D tarot table with streamed AI readings and a TikTok LIVE mode for hosts.',
		tags: ['Next.js 16', 'Three.js', 'GLSL', 'LLM API'],
		outcome: '78 cards',
		outcomeLabel: 'RENDERED IN A SINGLE INSTANCED MESH',
		variant: 'mobile',
		context: 'An interactive reading table built to run smoothly on phones and on a live stream.',
		contributions: [
			'Rendered all 78 cards in a single InstancedMesh with a custom bend shader, bloom, graphics tiers, and a WebGL fallback.',
			'Designed a deterministic, crypto-random shuffle engine (5 physical methods) that drives the card animation.',
			'Streamed AI readings (SSE) that interpret only the cards actually drawn.',
			'Built a TikTok LIVE mode: a server-side chat / gift bridge, a gift-ranked viewer queue and leaderboard, and a host panel synced to the overlay.'
		]
	},
	{
		number: '10',
		name: 'Study harder.\nKeep the streak.',
		company: 'Side project · Practice-Exam App',
		year: 'NOV 2026',
		category: 'PWA',
		description: 'A gamified, client-side practice-exam app with resumable sessions and per-topic analysis.',
		tags: ['React 19', 'TypeScript', 'Vite', 'PWA'],
		outcome: '235',
		outcomeLabel: 'QUESTIONS, INCL. CLINICAL VIGNETTES',
		variant: 'mobile',
		context: 'A focused exam simulator that works offline and keeps learners coming back.',
		contributions: [
			'Built timer auto-submit, resumable sessions, and per-topic analysis, driven by auto-discovered JSON question packs.',
			'Added gamification with XP, streaks, and badges.',
			'Wrote a linter that checks questions against NBME item-writing rules.'
		]
	}
];

export const experience = [
	{
		company: 'RADSoft',
		period: 'DEC 2025 — PRESENT',
		roles: [
			'Software Engineering Supervisor · Apr 2026 — Present',
			'Senior Software Engineer · Dec 2025 — Apr 2026'
		],
		description:
			'Leading PreTrade and co-building ChatHub. Architecture, engineering standards, and platform delivery.'
	},
	{
		company: 'Stealth Startup',
		period: 'SEP 2025 — PRESENT',
		roles: ['Software Engineer · Self-employed'],
		description: 'Lead developer of Hermes E-Office and Poru: products owned end to end.'
	},
	{
		company: 'Grab',
		period: 'MAY 2022 — MAY 2025',
		roles: [
			'Mobile Engineer, Flutter (Mex App) · Jan 2024 — May 2025',
			'Software Engineer, Web (Mex Onboarding) · Oct 2023 — Jan 2024',
			'Software Engineer, Web & Flutter (POS) · Jul 2022 — Oct 2023',
			'Software Engineer, Full Stack · May 2022 — Jun 2022'
		],
		description: 'Merchant apps (Mex, POS, Onboarding) at Southeast Asian scale.'
	},
	{
		company: 'Global Media Utama Teknologi',
		period: 'JAN 2021 — FEB 2022',
		roles: ['Web Developer · Internship'],
		description: 'Built a customer relationship management system on the MERN stack.'
	}
];
