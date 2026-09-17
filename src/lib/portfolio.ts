export const profile = {
	name: 'Gabriel Ivan Setyaputra',
	linkedin: 'https://www.linkedin.com/in/ivansetya/',
	location: 'Tulungagung, Indonesia'
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
		year: '2025 — PRESENT',
		category: 'FRONTEND ARCHITECTURE',
		description:
			'From a blank canvas to a modular investment platform. An extensible workspace for complex financial workflows.',
		tags: ['React', 'TypeScript', 'Zustand'],
		outcome: 'Built from zero.',
		outcomeLabel: 'ARCHITECTURE → PRODUCTION',
		variant: 'grid',
		context:
			'PreTrade brings portfolio management, trading, fund monitoring, and investment operations into a configurable dashboard. I built its frontend foundation and now lead its technical direction.',
		contributions: [
			'Designed a custom grid rendering engine with draggable, resizable, persistent widgets using React Grid Layout and Zustand.',
			'Introduced a Registry Pattern architecture to make new financial modules easier to add.',
			'Delivered portfolio grouping, charts, order lists, fund positions, monitoring, rebalancing, and bulk-order modules.',
			'Directed Blackbird backend integration, engineering standards, and Docker / GitHub Actions delivery pipelines.'
		]
	},
	{
		number: '02',
		name: 'Small interactions.\nMeaningful merchant impact.',
		company: 'Grab · Merchant experience',
		year: '2023 — 2025',
		category: 'WEB & MOBILE ENGINEERING',
		description:
			'Making everyday business easier through clearer insights, thoughtful feedback flows, and simpler onboarding.',
		tags: ['Flutter', 'Dart', 'React'],
		outcome: '79% → 91%',
		outcomeLabel: 'POSITIVE FEEDBACK RESPONSE RATE',
		variant: 'mobile',
		context:
			'Across merchant onboarding and the Mex app, I worked with cross-functional teams on experiences used by businesses across Southeast Asia.',
		contributions: [
			'Engineered the Mex feedback flow: positive response rates increased from 79% to 91%, while engagement rose from 11.5% to 29.4%.',
			'Improved dynamic translations in onboarding, saving an estimated 900 monthly man-hours.',
			'Built merchant insights, JSON-driven UI, a web LottiePlayer, and WebView integration for the Mex AI Assistant.',
			'Delivered Meal For One Insights Phase 1, recognized as a Top 40 Project at Grab.'
		]
	},
	{
		number: '03',
		name: 'Less friction.\nMore business as usual.',
		company: 'Grab · POS ecosystem',
		year: '2022 — 2023',
		category: 'PRODUCT ENGINEERING',
		description:
			'Reliable tools for the people behind the counter. Connecting design systems, diagnostics, and payment operations.',
		tags: ['React', 'Flutter', 'Design systems'],
		outcome: '53%+',
		outcomeLabel: 'REDUCTION IN SUPPORT TICKETS',
		variant: 'pos',
		context:
			'The POS ecosystem needed consistent interfaces and tools that helped merchants keep operating. I contributed across web and Flutter applications.',
		contributions: [
			'Contributed to a diagnostic tool that reduced support tickets by over 53% and helped stores resolve network issues independently.',
			'Led design system creation and the Flutter 3.3.10 upgrade for a consistent POS experience.',
			'Implemented feature flags and built a lead-generation page with Salesforce tracking.',
			'Developed CMS functionality for Grablink integration to streamline Hubbo POS payment operations.'
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
			'Building PreTrade. Leading architecture, engineering standards, and platform delivery.'
	},
	{
		company: 'Stealth Startup',
		period: 'SEP 2025 — PRESENT',
		roles: ['Software Engineer · Self-employed'],
		description: 'Independent product work.'
	},
	{
		company: 'Grab',
		period: 'MAY 2022 — MAY 2025',
		roles: [
			'Mobile Engineer, Mex · Jan 2024 — May 2025',
			'Web Engineer, Mex Onboarding · Oct 2023 — Jan 2024',
			'Web & Flutter Engineer, POS · Jul 2022 — Oct 2023',
			'Full Stack Engineer · May 2022 — Jun 2022'
		],
		description: 'Consumer and merchant products at Southeast Asian scale.'
	},
	{
		company: 'Global Media Utama Teknologi',
		period: 'JAN 2021 — FEB 2022',
		roles: ['Web Developer · Internship'],
		description: 'Built a customer relationship management application with the MERN stack.'
	}
];
